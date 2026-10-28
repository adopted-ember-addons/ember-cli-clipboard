import Component from '@glimmer/component';
import type { ClipboardModifierSignature } from '../modifiers/clipboard.ts';
export interface CopyButtonSignature {
    Args: ClipboardModifierSignature['Args']['Named'];
    Blocks: {
        default: [];
    };
    Element: HTMLButtonElement;
}
export default class CopyButton extends Component<CopyButtonSignature> {
    guid: string;
}
//# sourceMappingURL=copy-button.d.ts.map