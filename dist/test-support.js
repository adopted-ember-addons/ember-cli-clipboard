import { captureRenderTree } from '@ember/debug';
import { getContext } from '@ember/test-helpers';
import { run } from '@ember/runloop';
import { guidFor } from '@ember/object/internals';

/**
 * Fires `success` action for an instance of a copy-button component
 * @param selector - css selector of the copy-button instance
 */
function triggerCopySuccess(selector) {
  const {
    owner
  } = getContext();
  _fireComponentAction(owner, selector, 'onSuccess');
}

/**
 * Fires `error` action for an instance of a copy-button component
 * @param selector - css selector of the copy-button instance
 */
function triggerCopyError(selector) {
  const {
    owner
  } = getContext();
  _fireComponentAction(owner, selector, 'onError');
}

/**
 * Fires named action for an instance of a copy-button component
 * @param owner - an owner object
 * @param selector - css selector of the copy-button instance
 * @param actionName - name of action
 */
function _fireComponentAction(owner, selector, actionName) {
  const component = _getComponentBySelector(owner, selector);
  _fireActionByName(component, actionName);
}

/**
 * Fetches component reference for a given owner and selector
 * @param owner - an owner object
 * @param selector - css selector of the copy-button instance
 * @returns component instance
 */
function _getComponentBySelector(owner, selector = '.copy-btn') {
  const renderTree = captureRenderTree(owner);
  const element = document.querySelector(selector);
  const guid = element?.dataset['clipboardId'];
  const instance = _findComponentInstance(renderTree[0], guid);
  if (!instance) {
    throw new Error(`Could not find a copy-button instance for selector "${selector}"`);
  }
  return instance;
}
function _findComponentInstance(node, guid) {
  if (!node) {
    return undefined;
  }
  if (guidFor(node.instance) === guid) {
    return node.instance;
  }
  const {
    children = []
  } = node;
  return children.map(child => _findComponentInstance(child, guid)).find(child => child);
}

/**
 * Fires a component's action given an action name
 * @param component - component to fire action from
 * @param actionName - name of action
 */
function _fireActionByName(component, actionName) {
  const action = component.args[actionName];
  // eslint-disable-next-line ember/no-runloop
  run(() => action?.());
}

export { _fireComponentAction, triggerCopyError, triggerCopySuccess };
//# sourceMappingURL=test-support.js.map
