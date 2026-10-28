import Helper from '@ember/component/helper';
import { getOwner } from '@ember/owner';
import { isSupported } from 'clipboard';

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
class isClipboardSupported extends Helper {
  isFastBoot;
  constructor(owner) {
    super(owner);
    const service = getOwner(this)?.lookup('service:fastboot');
    // @ts-expect-error: this is fine
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    this.isFastBoot = service ? service.isFastBoot : false;
  }
  compute([action]) {
    const {
      isFastBoot
    } = this;

    // @ts-expect-error: bug in clipboard.js types
    return isFastBoot ? false : isSupported(action);
  }
}

export { isClipboardSupported as default };
//# sourceMappingURL=is-clipboard-supported.js.map
