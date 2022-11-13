// @ts-nocheck
import { mergeAttributes, Node } from '@tiptap/core';

const MathNode = Node.create({
	name: 'mathNode',

	content: 'inline*',

	addOptions() {
		return {
			HTMLAttributes: {},
			inline: false
		};
	},
	inline() {
		return this.options.inline;
	},
	group() {
		return this.options.inline ? 'inline' : 'block';
	},

	addAttributes() {
		return {
			content: {
				default: '',
				renderHTML: (attributes) => {
					return {
						content: attributes.content
					};
				}
			}
		};
	},

	parseHTML() {
		return [
			{
				tag: 'div'
			}
		];
	},
	renderHTML({ node, HTMLAttributes }) {
		console.log(node.attrs);
		return [
			'div',
			mergeAttributes(this.options.HTMLAttributes, { class: 'wafwe' }),
			node.attrs.content
		];
	},
	addCommands() {
		return {
			setMath:
				(attributes) =>
				({ commands }) => {
					return commands.setNode(this.name, attributes);
				}
		};
	}
});

export default MathNode;
