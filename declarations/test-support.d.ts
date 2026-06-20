import type Owner from '@ember/owner';
/**
 * Fires `success` action for an instance of a copy-button component
 * @param selector - css selector of the copy-button instance
 */
export declare function triggerCopySuccess(selector?: string): void;
/**
 * Fires `error` action for an instance of a copy-button component
 * @param selector - css selector of the copy-button instance
 */
export declare function triggerCopyError(selector?: string): void;
/**
 * Fires named action for an instance of a copy-button component
 * @param owner - an owner object
 * @param selector - css selector of the copy-button instance
 * @param actionName - name of action
 */
export declare function _fireComponentAction(owner: Owner, selector: string | undefined, actionName: 'onSuccess' | 'onError'): void;
//# sourceMappingURL=test-support.d.ts.map