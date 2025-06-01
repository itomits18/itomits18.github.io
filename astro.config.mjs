// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
	site: 'https://itomits18.github.io',
	integrations: [
		starlight({ 
			title: 'OMITS 18',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
					{
					label: 'Getting Started',
					items: [
						{ label: 'Installation', slug: 'getting-started/installation'},
						{ label: 'Configuration', slug: 'getting-started/configuration'},
						{ label: 'Directory Structure', slug: 'getting-started/directory'},
						{ label: 'Database', slug: 'getting-started/database' },
						],
				},
					{
						label: 'API Documentation',
						items: [
							{ label: 'Authentication', slug:'api/authentication' },
							{ label: 'Error Handling', slug:'api/error' },
							{ label: 'API Documentation', slug:'api/api-documentation' },
						],
				},
					{
						label: 'Advanced Topics',
						items: [ 
							{ label: 'Environtment Variables', slug: 'advanced/env' },
							{ label: 'Testing', slug: 'advanced/testing' },
							{ label: 'Deployment', slug: 'advanced/deployment' },
						],
					},
				{
					label: 'Project Info',
					items: [ 
							{ label: 'References', slug: 'project/references' },
							{ label: 'Contributing', slug: 'project/contributing' },
							{ label: 'Changelog', slug: 'project/changelog' },
						],
				},
				
			],
		}),
	],
});
