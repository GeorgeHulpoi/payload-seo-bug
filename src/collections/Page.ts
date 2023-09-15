import { CollectionConfig } from 'payload/types';

// Example Collection - For reference only, this must be added to payload.config.ts to be used.
const Pages: CollectionConfig = {
	slug: 'pages',
	fields: [
		{
			name: 'id',
			label: 'Slug',
			type: 'text',
			required: true,
			unique: true,
		},
	],
};

export default Pages;
