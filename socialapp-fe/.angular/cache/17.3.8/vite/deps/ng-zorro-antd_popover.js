import {
  NzToolTipComponent,
  NzTooltipBaseDirective,
  isTooltipEmpty
} from "./chunk-WFN6SJLD.js";
import {
  NzConnectedOverlayDirective,
  NzOverlayModule
} from "./chunk-X4OLXUW3.js";
import {
  CdkConnectedOverlay,
  OverlayModule
} from "./chunk-Z7PSAAGN.js";
import "./chunk-OX22V73U.js";
import "./chunk-PXNY5WLW.js";
import "./chunk-DEGCIOYJ.js";
import {
  NzNoAnimationDirective
} from "./chunk-I3C6U56M.js";
import "./chunk-USKC76VO.js";
import {
  zoomBigMotion
} from "./chunk-XZIVNFZQ.js";
import {
  NzOutletModule,
  NzStringTemplateOutletDirective
} from "./chunk-LLF5WQGB.js";
import "./chunk-P3OKEVSS.js";
import "./chunk-J3OF5AMK.js";
import "./chunk-IGQ5H5G3.js";
import "./chunk-XNKJYMG5.js";
import "./chunk-E5TUG3TZ.js";
import {
  WithConfig
} from "./chunk-7ZIF5OVP.js";
import "./chunk-444SWNZ7.js";
import "./chunk-PBTJFNNQ.js";
import "./chunk-XUXDTRYK.js";
import "./chunk-RDJJSLCP.js";
import "./chunk-SHIUUSE2.js";
import "./chunk-C4KMBTLC.js";
import {
  NgClass,
  NgStyle
} from "./chunk-3RMSGSQC.js";
import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  EventEmitter,
  Input,
  InputFlags,
  NgModule,
  Output,
  ViewEncapsulation$1,
  booleanAttribute,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵInputTransformsFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-RGUNTEJD.js";
import {
  __decorate
} from "./chunk-Q6ZVTVW4.js";
import {
  __spreadValues
} from "./chunk-ASLTLD6L.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-popover.mjs
function NzPopoverComponent_ng_template_0_Conditional_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.nzTitle);
  }
}
function NzPopoverComponent_ng_template_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 7);
    ɵɵtemplate(1, NzPopoverComponent_ng_template_0_Conditional_6_ng_container_1_Template, 2, 1, "ng-container", 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("nzStringTemplateOutlet", ctx_r1.nzTitle);
  }
}
function NzPopoverComponent_ng_template_0_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.nzContent);
  }
}
function NzPopoverComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2)(1, "div", 3)(2, "div", 4);
    ɵɵelement(3, "span", 5);
    ɵɵelementEnd();
    ɵɵelementStart(4, "div", 6)(5, "div");
    ɵɵtemplate(6, NzPopoverComponent_ng_template_0_Conditional_6_Template, 2, 1, "div", 7);
    ɵɵelementStart(7, "div", 8);
    ɵɵtemplate(8, NzPopoverComponent_ng_template_0_ng_container_8_Template, 2, 1, "ng-container", 9);
    ɵɵelementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassProp("ant-popover-rtl", ctx_r1.dir === "rtl");
    ɵɵproperty("ngClass", ctx_r1._classMap)("ngStyle", ctx_r1.nzOverlayStyle)("@.disabled", !!(ctx_r1.noAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation))("nzNoAnimation", ctx_r1.noAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation)("@zoomBigMotion", "active");
    ɵɵadvance(6);
    ɵɵconditional(6, ctx_r1.nzTitle ? 6 : -1);
    ɵɵadvance(2);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r1.nzContent);
  }
}
var NZ_CONFIG_MODULE_NAME = "popover";
var _NzPopoverDirective = class _NzPopoverDirective extends NzTooltipBaseDirective {
  getProxyPropertyMap() {
    return __spreadValues({
      nzPopoverBackdrop: ["nzBackdrop", () => this.nzPopoverBackdrop]
    }, super.getProxyPropertyMap());
  }
  constructor() {
    super(NzPopoverComponent);
    this._nzModuleName = NZ_CONFIG_MODULE_NAME;
    this.trigger = "hover";
    this.placement = "top";
    this.nzPopoverBackdrop = false;
    this.visibleChange = new EventEmitter();
  }
};
_NzPopoverDirective.ɵfac = function NzPopoverDirective_Factory(t) {
  return new (t || _NzPopoverDirective)();
};
_NzPopoverDirective.ɵdir = ɵɵdefineDirective({
  type: _NzPopoverDirective,
  selectors: [["", "nz-popover", ""]],
  hostVars: 2,
  hostBindings: function NzPopoverDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("ant-popover-open", ctx.visible);
    }
  },
  inputs: {
    arrowPointAtCenter: [InputFlags.HasDecoratorInputTransform, "nzPopoverArrowPointAtCenter", "arrowPointAtCenter", booleanAttribute],
    title: [InputFlags.None, "nzPopoverTitle", "title"],
    content: [InputFlags.None, "nzPopoverContent", "content"],
    directiveTitle: [InputFlags.None, "nz-popover", "directiveTitle"],
    trigger: [InputFlags.None, "nzPopoverTrigger", "trigger"],
    placement: [InputFlags.None, "nzPopoverPlacement", "placement"],
    origin: [InputFlags.None, "nzPopoverOrigin", "origin"],
    visible: [InputFlags.None, "nzPopoverVisible", "visible"],
    mouseEnterDelay: [InputFlags.None, "nzPopoverMouseEnterDelay", "mouseEnterDelay"],
    mouseLeaveDelay: [InputFlags.None, "nzPopoverMouseLeaveDelay", "mouseLeaveDelay"],
    overlayClassName: [InputFlags.None, "nzPopoverOverlayClassName", "overlayClassName"],
    overlayStyle: [InputFlags.None, "nzPopoverOverlayStyle", "overlayStyle"],
    nzPopoverBackdrop: "nzPopoverBackdrop"
  },
  outputs: {
    visibleChange: "nzPopoverVisibleChange"
  },
  exportAs: ["nzPopover"],
  standalone: true,
  features: [ɵɵInputTransformsFeature, ɵɵInheritDefinitionFeature]
});
var NzPopoverDirective = _NzPopoverDirective;
__decorate([WithConfig()], NzPopoverDirective.prototype, "nzPopoverBackdrop", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzPopoverDirective, [{
    type: Directive,
    args: [{
      selector: "[nz-popover]",
      exportAs: "nzPopover",
      host: {
        "[class.ant-popover-open]": "visible"
      },
      standalone: true
    }]
  }], () => [], {
    arrowPointAtCenter: [{
      type: Input,
      args: [{
        alias: "nzPopoverArrowPointAtCenter",
        transform: booleanAttribute
      }]
    }],
    title: [{
      type: Input,
      args: ["nzPopoverTitle"]
    }],
    content: [{
      type: Input,
      args: ["nzPopoverContent"]
    }],
    directiveTitle: [{
      type: Input,
      args: ["nz-popover"]
    }],
    trigger: [{
      type: Input,
      args: ["nzPopoverTrigger"]
    }],
    placement: [{
      type: Input,
      args: ["nzPopoverPlacement"]
    }],
    origin: [{
      type: Input,
      args: ["nzPopoverOrigin"]
    }],
    visible: [{
      type: Input,
      args: ["nzPopoverVisible"]
    }],
    mouseEnterDelay: [{
      type: Input,
      args: ["nzPopoverMouseEnterDelay"]
    }],
    mouseLeaveDelay: [{
      type: Input,
      args: ["nzPopoverMouseLeaveDelay"]
    }],
    overlayClassName: [{
      type: Input,
      args: ["nzPopoverOverlayClassName"]
    }],
    overlayStyle: [{
      type: Input,
      args: ["nzPopoverOverlayStyle"]
    }],
    nzPopoverBackdrop: [{
      type: Input
    }],
    visibleChange: [{
      type: Output,
      args: ["nzPopoverVisibleChange"]
    }]
  });
})();
var _NzPopoverComponent = class _NzPopoverComponent extends NzToolTipComponent {
  constructor() {
    super(...arguments);
    this._prefix = "ant-popover";
  }
  get hasBackdrop() {
    return this.nzTrigger === "click" ? this.nzBackdrop : false;
  }
  isEmpty() {
    return isTooltipEmpty(this.nzTitle) && isTooltipEmpty(this.nzContent);
  }
};
_NzPopoverComponent.ɵfac = /* @__PURE__ */ (() => {
  let ɵNzPopoverComponent_BaseFactory;
  return function NzPopoverComponent_Factory(t) {
    return (ɵNzPopoverComponent_BaseFactory || (ɵNzPopoverComponent_BaseFactory = ɵɵgetInheritedFactory(_NzPopoverComponent)))(t || _NzPopoverComponent);
  };
})();
_NzPopoverComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzPopoverComponent,
  selectors: [["nz-popover"]],
  exportAs: ["nzPopoverComponent"],
  standalone: true,
  features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  decls: 2,
  vars: 6,
  consts: [["overlay", "cdkConnectedOverlay"], ["cdkConnectedOverlay", "", "nzConnectedOverlay", "", 3, "overlayOutsideClick", "detach", "positionChange", "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayPositions", "cdkConnectedOverlayOpen", "cdkConnectedOverlayPush", "nzArrowPointAtCenter"], [1, "ant-popover", 3, "ngClass", "ngStyle", "nzNoAnimation"], [1, "ant-popover-content"], [1, "ant-popover-arrow"], [1, "ant-popover-arrow-content"], ["role", "tooltip", 1, "ant-popover-inner"], [1, "ant-popover-title"], [1, "ant-popover-inner-content"], [4, "nzStringTemplateOutlet"]],
  template: function NzPopoverComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵtemplate(0, NzPopoverComponent_ng_template_0_Template, 9, 9, "ng-template", 1, 0, ɵɵtemplateRefExtractor);
      ɵɵlistener("overlayOutsideClick", function NzPopoverComponent_Template_ng_template_overlayOutsideClick_0_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onClickOutside($event));
      })("detach", function NzPopoverComponent_Template_ng_template_detach_0_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.hide());
      })("positionChange", function NzPopoverComponent_Template_ng_template_positionChange_0_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onPositionChange($event));
      });
    }
    if (rf & 2) {
      ɵɵproperty("cdkConnectedOverlayHasBackdrop", ctx.hasBackdrop)("cdkConnectedOverlayOrigin", ctx.origin)("cdkConnectedOverlayPositions", ctx._positions)("cdkConnectedOverlayOpen", ctx._visible)("cdkConnectedOverlayPush", ctx.cdkConnectedOverlayPush)("nzArrowPointAtCenter", ctx.nzArrowPointAtCenter);
    }
  },
  dependencies: [OverlayModule, CdkConnectedOverlay, NzOverlayModule, NzConnectedOverlayDirective, NgClass, NgStyle, NzNoAnimationDirective, NzOutletModule, NzStringTemplateOutletDirective],
  encapsulation: 2,
  data: {
    animation: [zoomBigMotion]
  },
  changeDetection: 0
});
var NzPopoverComponent = _NzPopoverComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzPopoverComponent, [{
    type: Component,
    args: [{
      selector: "nz-popover",
      exportAs: "nzPopoverComponent",
      animations: [zoomBigMotion],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      preserveWhitespaces: false,
      template: `
    <ng-template
      #overlay="cdkConnectedOverlay"
      cdkConnectedOverlay
      nzConnectedOverlay
      [cdkConnectedOverlayHasBackdrop]="hasBackdrop"
      [cdkConnectedOverlayOrigin]="origin"
      [cdkConnectedOverlayPositions]="_positions"
      [cdkConnectedOverlayOpen]="_visible"
      [cdkConnectedOverlayPush]="cdkConnectedOverlayPush"
      [nzArrowPointAtCenter]="nzArrowPointAtCenter"
      (overlayOutsideClick)="onClickOutside($event)"
      (detach)="hide()"
      (positionChange)="onPositionChange($event)"
    >
      <div
        class="ant-popover"
        [class.ant-popover-rtl]="dir === 'rtl'"
        [ngClass]="_classMap"
        [ngStyle]="nzOverlayStyle"
        [@.disabled]="!!noAnimation?.nzNoAnimation"
        [nzNoAnimation]="noAnimation?.nzNoAnimation"
        [@zoomBigMotion]="'active'"
      >
        <div class="ant-popover-content">
          <div class="ant-popover-arrow">
            <span class="ant-popover-arrow-content"></span>
          </div>
          <div class="ant-popover-inner" role="tooltip">
            <div>
              @if (nzTitle) {
                <div class="ant-popover-title">
                  <ng-container *nzStringTemplateOutlet="nzTitle">{{ nzTitle }}</ng-container>
                </div>
              }
              <div class="ant-popover-inner-content">
                <ng-container *nzStringTemplateOutlet="nzContent">{{ nzContent }}</ng-container>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ng-template>
  `,
      imports: [OverlayModule, NzOverlayModule, NgClass, NgStyle, NzNoAnimationDirective, NzOutletModule],
      standalone: true
    }]
  }], null, null);
})();
var _NzPopoverModule = class _NzPopoverModule {
};
_NzPopoverModule.ɵfac = function NzPopoverModule_Factory(t) {
  return new (t || _NzPopoverModule)();
};
_NzPopoverModule.ɵmod = ɵɵdefineNgModule({
  type: _NzPopoverModule,
  imports: [NzPopoverDirective, NzPopoverComponent],
  exports: [NzPopoverDirective, NzPopoverComponent]
});
_NzPopoverModule.ɵinj = ɵɵdefineInjector({
  imports: [NzPopoverComponent]
});
var NzPopoverModule = _NzPopoverModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzPopoverModule, [{
    type: NgModule,
    args: [{
      imports: [NzPopoverDirective, NzPopoverComponent],
      exports: [NzPopoverDirective, NzPopoverComponent]
    }]
  }], null, null);
})();
export {
  NzPopoverComponent,
  NzPopoverDirective,
  NzPopoverModule
};
//# sourceMappingURL=ng-zorro-antd_popover.js.map
