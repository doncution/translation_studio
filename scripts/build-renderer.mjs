import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { compileScript, compileTemplate, parse } from '@vue/compiler-sfc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');
const sourcePath = join(projectRoot, 'src', 'renderer', 'App.vue');
const outputPath = join(projectRoot, 'dist', 'renderer', 'App.js');

const source = await readFile(sourcePath, 'utf-8');
const { descriptor } = parse(source, { filename: 'App.vue' });

if (!descriptor.scriptSetup && !descriptor.script) {
  throw new Error('App.vue requires a <script> or <script setup> block.');
}

const compiledScript = compileScript(descriptor, { id: 'app' });

if (!descriptor.template) {
  throw new Error('App.vue requires a <template> block.');
}

const template = compileTemplate({
  id: 'app',
  filename: 'App.vue',
  source: descriptor.template.content,
  scoped: descriptor.styles.some((style) => style.scoped === true),
  compilerOptions: {
    bindingMetadata: compiledScript.bindings,
  },
});

let scriptContent = compiledScript.content;
if (scriptContent.includes('export default')) {
  scriptContent = scriptContent.replace('export default', 'const __sfc__ =');
} else {
  scriptContent = `${scriptContent}\nconst __sfc__ = __default__;`;
}

const renderedCode = `${template.code}\n${scriptContent}\n__sfc__.render = render;\nexport default __sfc__;\n`;

await mkdir(dirname(outputPath), { recursive: true });
await writeFile(outputPath, renderedCode, 'utf-8');
