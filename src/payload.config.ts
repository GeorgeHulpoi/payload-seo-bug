import { buildConfig } from 'payload/config';
import path from 'path';
// import Examples from './collections/Examples';
import Users from './collections/Users';
import Pages from './collections/Page';
import seo from '@payloadcms/plugin-seo';

export default buildConfig({
	serverURL: 'http://localhost:3000',
	admin: {
		user: Users.slug,
	},
	collections: [Users, Pages],
	typescript: {
		outputFile: path.resolve(__dirname, 'payload-types.ts'),
	},
	graphQL: {
		schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
	},
	plugins: [
		seo({
			collections: [Pages.slug],
			tabbedUI: true,
		}),
	],
});
