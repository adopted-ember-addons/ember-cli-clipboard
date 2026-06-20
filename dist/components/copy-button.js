import Component from '@glimmer/component';
import { guidFor } from '@ember/object/internals';
import clipboardModifier from '../modifiers/clipboard.js';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

class CopyButton extends Component {
  guid = guidFor(this);
  static {
    setComponentTemplate(precompileTemplate("<button class=\"copy-btn\" type=\"button\" ...attributes data-clipboard-id={{this.guid}} {{clipboard text=@text target=@target action=@action delegateClickEvent=@delegateClickEvent container=@container onError=@onError onSuccess=@onSuccess}}>\n  {{yield}}\n</button>", {
      strictMode: true,
      scope: () => ({
        clipboard: clipboardModifier
      })
    }), this);
  }
}

export { CopyButton as default };
//# sourceMappingURL=copy-button.js.map
