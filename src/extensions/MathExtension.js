// @ts-nocheck
import { mergeAttributes, Node } from '@tiptap/core';

const MathNode = Node.create({
	name: 'mathNode',

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
			mergeAttributes(this.options.HTMLAttributes, HTMLAttributes, {
				class: 'wafwe'
			}),
			node.attrs.content
		];
	},
	addCommands() {
		return {
			addMath:
				(attrs) =>
				({ state, dispatch }) => {
					const { selection } = state;
					const position = selection.$cursor ? selection.$cursor.pos : selection.$to.pos;
					const node = this.type.create(attrs);
					const transaction = state.tr.insert(position, node);

					dispatch(transaction);
					setTimeout(() => {
						MathJax.typeset();
					}, 100);
				}
		};
	}
});

export default MathNode;
