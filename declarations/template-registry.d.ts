import type CopyButton from './components/copy-button';
import type IsClipboardSupportedHelper from './helpers/is-clipboard-supported.ts';
import type ClipboardModifier from './modifiers/clipboard.ts';
export default interface Registry {
    CopyButton: typeof CopyButton;
    'copy-button': typeof CopyButton;
    'is-clipboard-supported': typeof IsClipboardSupportedHelper;
    clipboard: typeof ClipboardModifier;
}
//# sourceMappingURL=template-registry.d.ts.map