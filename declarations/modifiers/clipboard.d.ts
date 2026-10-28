import ClipboardJS from 'clipboard';
/**
 *
 * ```gjs live preview no-shadow
 * import { clipboard } from '@adopted-ember-addons/ember-cli-clipboard';
 *
 * const onSuccess = () => {
 *   alert('Text copied to clipboard successfully!');
 * };
 *
 * <template>
 *   <button
 *     class='application__copy-button'
 *     type='button'
 *     {{clipboard text='element modifier' onSuccess=onSuccess}}
 *   >
 *     Copy Text
 *   </button>
 * </template>
 * ```
 */
export interface ClipboardModifierSignature {
    Args: {
        Named: {
            /**
             * The action to perform, either 'copy' or 'cut'.
             * Defaults to 'copy'.
             */
            action?: 'copy' | 'cut';
            /**
             * The container element for the clipboard action.
             * Can be a string selector or an HTMLElement.
             */
            container?: string | ClipboardJS.Options['container'];
            /**
             * If true, the click event is scoped to this element.
             * If false, it is scoped to document.body (ClipboardJS default).
             * Defaults to true.
             */
            delegateClickEvent?: boolean;
            /**
             * The target element to copy from.
             * Can be a string selector or a function that returns an element.
             * If not provided, the text attribute will be used.
             */
            target?: string | ((trigger: Element) => Element);
            /**
             * The text to copy to the clipboard.
             * If provided, it overrides the target attribute.
             * Can be a string or a function that returns a string.
             */
            text?: string | ((trigger: Element) => string);
            /**
             * Callback function to execute on successful copy.
             * Receives the ClipboardJS event as an argument.
             */
            onSuccess?: (event: ClipboardJS.Event) => void;
            /**
             * Callback function to execute on copy error.
             * Receives the ClipboardJS event as an argument.
             */
            onError?: (event: ClipboardJS.Event) => void;
        };
    };
    Element: HTMLElement | HTMLButtonElement;
}
declare const clipboardModifier: import("ember-modifier").FunctionBasedModifier<{
    Element: HTMLElement | HTMLButtonElement;
    Args: {
        Named: {
            /**
             * The action to perform, either 'copy' or 'cut'.
             * Defaults to 'copy'.
             */
            action?: "copy" | "cut";
            /**
             * The container element for the clipboard action.
             * Can be a string selector or an HTMLElement.
             */
            container?: string | ClipboardJS.Options["container"];
            /**
             * If true, the click event is scoped to this element.
             * If false, it is scoped to document.body (ClipboardJS default).
             * Defaults to true.
             */
            delegateClickEvent?: boolean;
            /**
             * The target element to copy from.
             * Can be a string selector or a function that returns an element.
             * If not provided, the text attribute will be used.
             */
            target?: string | ((trigger: Element) => Element);
            /**
             * The text to copy to the clipboard.
             * If provided, it overrides the target attribute.
             * Can be a string or a function that returns a string.
             */
            text?: string | ((trigger: Element) => string);
            /**
             * Callback function to execute on successful copy.
             * Receives the ClipboardJS event as an argument.
             */
            onSuccess?: (event: ClipboardJS.Event) => void;
            /**
             * Callback function to execute on copy error.
             * Receives the ClipboardJS event as an argument.
             */
            onError?: (event: ClipboardJS.Event) => void;
        };
        Positional: [];
    };
}>;
export default clipboardModifier;
//# sourceMappingURL=clipboard.d.ts.map