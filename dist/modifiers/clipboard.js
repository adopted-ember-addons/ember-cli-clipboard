import ClipboardJS from 'clipboard';
import { modifier } from 'ember-modifier';
import { isBlank } from '@ember/utils';
import { guidFor } from '@ember/object/internals';

const CLIPBOARD_EVENTS = ['success', 'error'];
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

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

const clipboardModifier = modifier((element, params, hash) => {
  const {
    action = 'copy',
    container,
    /*
     * delegateClickEvent true - scope event listener to this element
     * delegateClickEvent false - scope event listener to document.body (ClipboardJS)
     */
    delegateClickEvent = true,
    target,
    text
  } = hash;
  element.setAttribute('data-clipboard-action', action);
  if (typeof text === 'string' && !isBlank(text)) {
    element.setAttribute('data-clipboard-text', text);
  }
  if (typeof target === 'string' && !isBlank(target)) {
    element.setAttribute('data-clipboard-target', target);
  }
  if (isBlank(element.dataset['clipboardId'])) {
    element.setAttribute('data-clipboard-id', guidFor(element));
  }
  const trigger = delegateClickEvent === false ? element : `[data-clipboard-id="${element.dataset['clipboardId']}"]`;
  const clipboard = new ClipboardJS(trigger, {
    text: typeof text === 'function' ? text : undefined,
    // @ts-expect-error: ClipboardJS types are not accurate
    container: typeof container === 'string' ? document.querySelector(container) : container,
    // @ts-expect-error: ClipboardJS types are not accurate
    target
  });
  CLIPBOARD_EVENTS.forEach(event => {
    clipboard.on(event, clipboardEvent => {
      if (!(element instanceof HTMLButtonElement) || !element.disabled) {
        // @ts-expect-error: ClipboardJS types are not accurate
        const action = hash[`on${capitalize(event)}`];
        if (action) {
          action(clipboardEvent);
        }
      }
    });
  });
  return () => clipboard.destroy();
});

export { clipboardModifier as default };
//# sourceMappingURL=clipboard.js.map
