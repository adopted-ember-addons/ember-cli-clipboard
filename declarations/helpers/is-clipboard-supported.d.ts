import Helper from '@ember/component/helper';
import type Owner from '@ember/owner';
/**
 *
 * # Check If Clipboard Is Supported
 *
 * ```gjs
 * import { isClipboardSupported } from '@adopted-ember-addons/ember-cli-clipboard';
 *
 * <template>
 *   {{#if (isClipboardSupported)}}
 *     Clipboard is supported 🎉
 *   {{else}}
 *     Clipboard is not supported 😔
 *   {{/if}}
 * </template>
 *```
 */
export default class isClipboardSupported extends Helper<{
    Args: {
        Positional: [
            /**
             * The action to check support for.
             */
            action?: string
        ];
    };
    Return: boolean;
}> {
    isFastBoot: boolean;
    constructor(owner: Owner);
    compute([action]: [action?: string]): boolean;
}
//# sourceMappingURL=is-clipboard-supported.d.ts.map