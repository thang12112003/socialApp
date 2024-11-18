import {
  NzToolTipComponent,
  NzTooltipBaseDirective
} from "./chunk-WFN6SJLD.js";
import {
  NzI18nModule,
  NzI18nPipe
} from "./chunk-EH3HCSPL.js";
import "./chunk-5JIJJDAK.js";
import {
  NzConnectedOverlayDirective,
  NzOverlayModule
} from "./chunk-X4OLXUW3.js";
import {
  NzButtonComponent,
  NzButtonModule
} from "./chunk-Q542OV3V.js";
import {
  NzWaveDirective
} from "./chunk-P5WCNQZS.js";
import {
  NzTransitionPatchDirective
} from "./chunk-OACI3OD2.js";
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
import {
  A11yModule,
  CdkTrapFocus
} from "./chunk-VZ7HWWOA.js";
import "./chunk-USKC76VO.js";
import {
  zoomBigMotion
} from "./chunk-XZIVNFZQ.js";
import {
  NzOutletModule,
  NzStringTemplateOutletDirective
} from "./chunk-LLF5WQGB.js";
import {
  NzIconDirective,
  NzIconModule
} from "./chunk-3TUHMKZG.js";
import "./chunk-3JSU54FM.js";
import "./chunk-IDCCK3LW.js";
import "./chunk-P3OKEVSS.js";
import "./chunk-J3OF5AMK.js";
import "./chunk-IGQ5H5G3.js";
import "./chunk-XNKJYMG5.js";
import "./chunk-E5TUG3TZ.js";
import {
  WithConfig
} from "./chunk-7ZIF5OVP.js";
import {
  wrapIntoObservable
} from "./chunk-444SWNZ7.js";
import "./chunk-PBTJFNNQ.js";
import "./chunk-XUXDTRYK.js";
import "./chunk-RDJJSLCP.js";
import "./chunk-SHIUUSE2.js";
import "./chunk-C4KMBTLC.js";
import {
  DOCUMENT,
  NgClass,
  NgStyle
} from "./chunk-3RMSGSQC.js";
import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  InputFlags,
  NgModule,
  Output,
  ViewChildren,
  ViewEncapsulation$1,
  booleanAttribute,
  inject,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵInputTransformsFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-RGUNTEJD.js";
import {
  Subject,
  __decorate,
  finalize,
  first,
  takeUntil
} from "./chunk-Q6ZVTVW4.js";
import {
  __spreadValues
} from "./chunk-ASLTLD6L.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-popconfirm.mjs
var _c0 = ["okBtn"];
var _c1 = ["cancelBtn"];
function NzPopconfirmComponent_ng_template_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 6);
    ɵɵelement(1, "span", 14);
    ɵɵelementEnd();
  }
}
function NzPopconfirmComponent_ng_template_0_ng_container_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "span", 17);
    ɵɵelement(2, "span", 18);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const icon_r3 = ctx.$implicit;
    ɵɵadvance(2);
    ɵɵproperty("nzType", icon_r3 || "exclamation-circle");
  }
}
function NzPopconfirmComponent_ng_template_0_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzPopconfirmComponent_ng_template_0_ng_container_7_ng_container_1_Template, 3, 1, "ng-container", 15);
    ɵɵelementStart(2, "div", 16);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("nzStringTemplateOutlet", ctx_r3.nzIcon);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r3.nzTitle);
  }
}
function NzPopconfirmComponent_ng_template_0_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵtextInterpolate1(" ", ctx_r3.nzCancelText, " ");
  }
}
function NzPopconfirmComponent_ng_template_0_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "nzI18n");
  }
  if (rf & 2) {
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(1, 1, "Modal.cancelText"), " ");
  }
}
function NzPopconfirmComponent_ng_template_0_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵtextInterpolate1(" ", ctx_r3.nzOkText, " ");
  }
}
function NzPopconfirmComponent_ng_template_0_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "nzI18n");
  }
  if (rf & 2) {
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(1, 1, "Modal.okText"), " ");
  }
}
function NzPopconfirmComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 4)(1, "div", 5);
    ɵɵtemplate(2, NzPopconfirmComponent_ng_template_0_Conditional_2_Template, 2, 0, "div", 6);
    ɵɵelementStart(3, "div", 7)(4, "div")(5, "div", 8)(6, "div", 9);
    ɵɵtemplate(7, NzPopconfirmComponent_ng_template_0_ng_container_7_Template, 4, 2, "ng-container", 10);
    ɵɵelementEnd();
    ɵɵelementStart(8, "div", 11)(9, "button", 12, 1);
    ɵɵlistener("click", function NzPopconfirmComponent_ng_template_0_Template_button_click_9_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.onCancel());
    });
    ɵɵtemplate(11, NzPopconfirmComponent_ng_template_0_Conditional_11_Template, 1, 1)(12, NzPopconfirmComponent_ng_template_0_Conditional_12_Template, 2, 3);
    ɵɵelementEnd();
    ɵɵelementStart(13, "button", 13, 2);
    ɵɵlistener("click", function NzPopconfirmComponent_ng_template_0_Template_button_click_13_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.onConfirm());
    });
    ɵɵtemplate(15, NzPopconfirmComponent_ng_template_0_Conditional_15_Template, 1, 1)(16, NzPopconfirmComponent_ng_template_0_Conditional_16_Template, 2, 3);
    ɵɵelementEnd()()()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵclassProp("ant-popover-rtl", ctx_r3.dir === "rtl");
    ɵɵproperty("cdkTrapFocusAutoCapture", ctx_r3.nzAutoFocus !== null)("ngClass", ctx_r3._classMap)("ngStyle", ctx_r3.nzOverlayStyle)("@.disabled", !!(ctx_r3.noAnimation == null ? null : ctx_r3.noAnimation.nzNoAnimation))("nzNoAnimation", ctx_r3.noAnimation == null ? null : ctx_r3.noAnimation.nzNoAnimation)("@zoomBigMotion", "active");
    ɵɵadvance(2);
    ɵɵconditional(2, ctx_r3.nzPopconfirmShowArrow ? 2 : -1);
    ɵɵadvance(5);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r3.nzTitle)("nzStringTemplateOutletContext", ctx_r3.nzTitleContext);
    ɵɵadvance(2);
    ɵɵproperty("nzSize", "small");
    ɵɵattribute("cdkFocusInitial", ctx_r3.nzAutoFocus === "cancel" || null);
    ɵɵadvance(2);
    ɵɵconditional(11, ctx_r3.nzCancelText ? 11 : 12);
    ɵɵadvance(2);
    ɵɵproperty("nzSize", "small")("nzType", ctx_r3.nzOkType !== "danger" ? ctx_r3.nzOkType : "primary")("nzDanger", ctx_r3.nzOkDanger || ctx_r3.nzOkType === "danger")("nzLoading", ctx_r3.confirmLoading)("disabled", ctx_r3.nzOkDisabled);
    ɵɵattribute("cdkFocusInitial", ctx_r3.nzAutoFocus === "ok" || null);
    ɵɵadvance(2);
    ɵɵconditional(15, ctx_r3.nzOkText ? 15 : 16);
  }
}
var NZ_CONFIG_MODULE_NAME = "popconfirm";
var _NzPopconfirmDirective = class _NzPopconfirmDirective extends NzTooltipBaseDirective {
  getProxyPropertyMap() {
    return __spreadValues({
      nzOkText: ["nzOkText", () => this.nzOkText],
      nzOkType: ["nzOkType", () => this.nzOkType],
      nzOkDanger: ["nzOkDanger", () => this.nzOkDanger],
      nzOkDisabled: ["nzOkDisabled", () => this.nzOkDisabled],
      nzCancelText: ["nzCancelText", () => this.nzCancelText],
      nzBeforeConfirm: ["nzBeforeConfirm", () => this.nzBeforeConfirm],
      nzCondition: ["nzCondition", () => this.nzCondition],
      nzIcon: ["nzIcon", () => this.nzIcon],
      nzPopconfirmShowArrow: ["nzPopconfirmShowArrow", () => this.nzPopconfirmShowArrow],
      nzPopconfirmBackdrop: ["nzBackdrop", () => this.nzPopconfirmBackdrop],
      nzPopconfirmContext: ["nzTitleContext", () => this.titleContext],
      nzAutoFocus: ["nzAutoFocus", () => this.nzAutofocus]
    }, super.getProxyPropertyMap());
  }
  constructor() {
    super(NzPopconfirmComponent);
    this._nzModuleName = NZ_CONFIG_MODULE_NAME;
    this.titleContext = null;
    this.trigger = "click";
    this.placement = "top";
    this.nzCondition = false;
    this.nzPopconfirmShowArrow = true;
    this.nzPopconfirmBackdrop = false;
    this.nzAutofocus = null;
    this.visibleChange = new EventEmitter();
    this.nzOnCancel = new EventEmitter();
    this.nzOnConfirm = new EventEmitter();
  }
  /**
   * @override
   */
  createComponent() {
    super.createComponent();
    this.component.nzOnCancel.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.nzOnCancel.emit();
    });
    this.component.nzOnConfirm.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.nzOnConfirm.emit();
    });
  }
};
_NzPopconfirmDirective.ɵfac = function NzPopconfirmDirective_Factory(t) {
  return new (t || _NzPopconfirmDirective)();
};
_NzPopconfirmDirective.ɵdir = ɵɵdefineDirective({
  type: _NzPopconfirmDirective,
  selectors: [["", "nz-popconfirm", ""]],
  hostVars: 2,
  hostBindings: function NzPopconfirmDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("ant-popover-open", ctx.visible);
    }
  },
  inputs: {
    arrowPointAtCenter: [InputFlags.HasDecoratorInputTransform, "nzPopconfirmArrowPointAtCenter", "arrowPointAtCenter", booleanAttribute],
    title: [InputFlags.None, "nzPopconfirmTitle", "title"],
    titleContext: [InputFlags.None, "nzPopconfirmTitleContext", "titleContext"],
    directiveTitle: [InputFlags.None, "nz-popconfirm", "directiveTitle"],
    trigger: [InputFlags.None, "nzPopconfirmTrigger", "trigger"],
    placement: [InputFlags.None, "nzPopconfirmPlacement", "placement"],
    origin: [InputFlags.None, "nzPopconfirmOrigin", "origin"],
    mouseEnterDelay: [InputFlags.None, "nzPopconfirmMouseEnterDelay", "mouseEnterDelay"],
    mouseLeaveDelay: [InputFlags.None, "nzPopconfirmMouseLeaveDelay", "mouseLeaveDelay"],
    overlayClassName: [InputFlags.None, "nzPopconfirmOverlayClassName", "overlayClassName"],
    overlayStyle: [InputFlags.None, "nzPopconfirmOverlayStyle", "overlayStyle"],
    visible: [InputFlags.None, "nzPopconfirmVisible", "visible"],
    nzOkText: "nzOkText",
    nzOkType: "nzOkType",
    nzOkDisabled: [InputFlags.HasDecoratorInputTransform, "nzOkDisabled", "nzOkDisabled", booleanAttribute],
    nzOkDanger: [InputFlags.HasDecoratorInputTransform, "nzOkDanger", "nzOkDanger", booleanAttribute],
    nzCancelText: "nzCancelText",
    nzBeforeConfirm: "nzBeforeConfirm",
    nzIcon: "nzIcon",
    nzCondition: [InputFlags.HasDecoratorInputTransform, "nzCondition", "nzCondition", booleanAttribute],
    nzPopconfirmShowArrow: [InputFlags.HasDecoratorInputTransform, "nzPopconfirmShowArrow", "nzPopconfirmShowArrow", booleanAttribute],
    nzPopconfirmBackdrop: "nzPopconfirmBackdrop",
    nzAutofocus: "nzAutofocus"
  },
  outputs: {
    visibleChange: "nzPopconfirmVisibleChange",
    nzOnCancel: "nzOnCancel",
    nzOnConfirm: "nzOnConfirm"
  },
  exportAs: ["nzPopconfirm"],
  standalone: true,
  features: [ɵɵInputTransformsFeature, ɵɵInheritDefinitionFeature]
});
var NzPopconfirmDirective = _NzPopconfirmDirective;
__decorate([WithConfig()], NzPopconfirmDirective.prototype, "nzPopconfirmBackdrop", void 0);
__decorate([WithConfig()], NzPopconfirmDirective.prototype, "nzAutofocus", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzPopconfirmDirective, [{
    type: Directive,
    args: [{
      selector: "[nz-popconfirm]",
      exportAs: "nzPopconfirm",
      host: {
        "[class.ant-popover-open]": "visible"
      },
      standalone: true
    }]
  }], () => [], {
    arrowPointAtCenter: [{
      type: Input,
      args: [{
        alias: "nzPopconfirmArrowPointAtCenter",
        transform: booleanAttribute
      }]
    }],
    title: [{
      type: Input,
      args: ["nzPopconfirmTitle"]
    }],
    titleContext: [{
      type: Input,
      args: ["nzPopconfirmTitleContext"]
    }],
    directiveTitle: [{
      type: Input,
      args: ["nz-popconfirm"]
    }],
    trigger: [{
      type: Input,
      args: ["nzPopconfirmTrigger"]
    }],
    placement: [{
      type: Input,
      args: ["nzPopconfirmPlacement"]
    }],
    origin: [{
      type: Input,
      args: ["nzPopconfirmOrigin"]
    }],
    mouseEnterDelay: [{
      type: Input,
      args: ["nzPopconfirmMouseEnterDelay"]
    }],
    mouseLeaveDelay: [{
      type: Input,
      args: ["nzPopconfirmMouseLeaveDelay"]
    }],
    overlayClassName: [{
      type: Input,
      args: ["nzPopconfirmOverlayClassName"]
    }],
    overlayStyle: [{
      type: Input,
      args: ["nzPopconfirmOverlayStyle"]
    }],
    visible: [{
      type: Input,
      args: ["nzPopconfirmVisible"]
    }],
    nzOkText: [{
      type: Input
    }],
    nzOkType: [{
      type: Input
    }],
    nzOkDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzOkDanger: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzCancelText: [{
      type: Input
    }],
    nzBeforeConfirm: [{
      type: Input
    }],
    nzIcon: [{
      type: Input
    }],
    nzCondition: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzPopconfirmShowArrow: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzPopconfirmBackdrop: [{
      type: Input
    }],
    nzAutofocus: [{
      type: Input
    }],
    visibleChange: [{
      type: Output,
      args: ["nzPopconfirmVisibleChange"]
    }],
    nzOnCancel: [{
      type: Output
    }],
    nzOnConfirm: [{
      type: Output
    }]
  });
})();
var _NzPopconfirmComponent = class _NzPopconfirmComponent extends NzToolTipComponent {
  constructor(elementRef) {
    super();
    this.elementRef = elementRef;
    this.nzCondition = false;
    this.nzPopconfirmShowArrow = true;
    this.nzOkType = "primary";
    this.nzOkDanger = false;
    this.nzOkDisabled = false;
    this.nzAutoFocus = null;
    this.nzBeforeConfirm = null;
    this.nzOnCancel = new Subject();
    this.nzOnConfirm = new Subject();
    this._trigger = "click";
    this.elementFocusedBeforeModalWasOpened = null;
    this.document = inject(DOCUMENT);
    this._prefix = "ant-popover";
    this.confirmLoading = false;
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    this.nzOnCancel.complete();
    this.nzOnConfirm.complete();
  }
  /**
   * @override
   */
  show() {
    if (!this.nzCondition) {
      this.capturePreviouslyFocusedElement();
      super.show();
    } else {
      this.onConfirm();
    }
  }
  hide() {
    super.hide();
    this.restoreFocus();
  }
  handleConfirm() {
    this.nzOnConfirm.next();
    super.hide();
  }
  onCancel() {
    this.nzOnCancel.next();
    super.hide();
  }
  onConfirm() {
    if (this.nzBeforeConfirm) {
      const observable = wrapIntoObservable(this.nzBeforeConfirm()).pipe(first());
      this.confirmLoading = true;
      observable.pipe(finalize(() => {
        this.confirmLoading = false;
        this.cdr.markForCheck();
      }), takeUntil(this.nzVisibleChange), takeUntil(this.destroy$)).subscribe((value) => {
        if (value) {
          this.handleConfirm();
        }
      });
    } else {
      this.handleConfirm();
    }
  }
  capturePreviouslyFocusedElement() {
    if (this.document) {
      this.elementFocusedBeforeModalWasOpened = this.document.activeElement;
    }
  }
  restoreFocus() {
    const toFocus = this.elementFocusedBeforeModalWasOpened;
    if (toFocus && typeof toFocus.focus === "function") {
      const activeElement = this.document.activeElement;
      const element = this.elementRef.nativeElement;
      if (!activeElement || activeElement === this.document.body || activeElement === element || element.contains(activeElement)) {
        toFocus.focus();
      }
    }
  }
};
_NzPopconfirmComponent.ɵfac = function NzPopconfirmComponent_Factory(t) {
  return new (t || _NzPopconfirmComponent)(ɵɵdirectiveInject(ElementRef));
};
_NzPopconfirmComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzPopconfirmComponent,
  selectors: [["nz-popconfirm"]],
  viewQuery: function NzPopconfirmComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c0, 5, ElementRef);
      ɵɵviewQuery(_c1, 5, ElementRef);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.okBtn = _t);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.cancelBtn = _t);
    }
  },
  exportAs: ["nzPopconfirmComponent"],
  standalone: true,
  features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  decls: 2,
  vars: 6,
  consts: [["overlay", "cdkConnectedOverlay"], ["cancelBtn", ""], ["okBtn", ""], ["cdkConnectedOverlay", "", "nzConnectedOverlay", "", 3, "overlayOutsideClick", "detach", "positionChange", "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayPositions", "cdkConnectedOverlayOpen", "cdkConnectedOverlayPush", "nzArrowPointAtCenter"], ["cdkTrapFocus", "", 1, "ant-popover", 3, "cdkTrapFocusAutoCapture", "ngClass", "ngStyle", "nzNoAnimation"], [1, "ant-popover-content"], [1, "ant-popover-arrow"], [1, "ant-popover-inner"], [1, "ant-popover-inner-content"], [1, "ant-popover-message"], [4, "nzStringTemplateOutlet", "nzStringTemplateOutletContext"], [1, "ant-popover-buttons"], ["nz-button", "", 3, "click", "nzSize"], ["nz-button", "", 3, "click", "nzSize", "nzType", "nzDanger", "nzLoading", "disabled"], [1, "ant-popover-arrow-content"], [4, "nzStringTemplateOutlet"], [1, "ant-popover-message-title"], [1, "ant-popover-message-icon"], ["nz-icon", "", "nzTheme", "fill", 3, "nzType"]],
  template: function NzPopconfirmComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵtemplate(0, NzPopconfirmComponent_ng_template_0_Template, 17, 21, "ng-template", 3, 0, ɵɵtemplateRefExtractor);
      ɵɵlistener("overlayOutsideClick", function NzPopconfirmComponent_Template_ng_template_overlayOutsideClick_0_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onClickOutside($event));
      })("detach", function NzPopconfirmComponent_Template_ng_template_detach_0_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.hide());
      })("positionChange", function NzPopconfirmComponent_Template_ng_template_positionChange_0_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onPositionChange($event));
      });
    }
    if (rf & 2) {
      ɵɵproperty("cdkConnectedOverlayHasBackdrop", ctx.nzBackdrop)("cdkConnectedOverlayOrigin", ctx.origin)("cdkConnectedOverlayPositions", ctx._positions)("cdkConnectedOverlayOpen", ctx._visible)("cdkConnectedOverlayPush", ctx.cdkConnectedOverlayPush)("nzArrowPointAtCenter", ctx.nzArrowPointAtCenter);
    }
  },
  dependencies: [OverlayModule, CdkConnectedOverlay, NzOverlayModule, NzConnectedOverlayDirective, A11yModule, CdkTrapFocus, NgClass, NgStyle, NzNoAnimationDirective, NzOutletModule, NzStringTemplateOutletDirective, NzIconModule, NzIconDirective, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzI18nModule, NzI18nPipe],
  encapsulation: 2,
  data: {
    animation: [zoomBigMotion]
  },
  changeDetection: 0
});
var NzPopconfirmComponent = _NzPopconfirmComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzPopconfirmComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      selector: "nz-popconfirm",
      exportAs: "nzPopconfirmComponent",
      preserveWhitespaces: false,
      animations: [zoomBigMotion],
      template: `
    <ng-template
      #overlay="cdkConnectedOverlay"
      cdkConnectedOverlay
      nzConnectedOverlay
      [cdkConnectedOverlayHasBackdrop]="nzBackdrop"
      [cdkConnectedOverlayOrigin]="origin"
      (overlayOutsideClick)="onClickOutside($event)"
      (detach)="hide()"
      (positionChange)="onPositionChange($event)"
      [cdkConnectedOverlayPositions]="_positions"
      [cdkConnectedOverlayOpen]="_visible"
      [cdkConnectedOverlayPush]="cdkConnectedOverlayPush"
      [nzArrowPointAtCenter]="nzArrowPointAtCenter"
    >
      <div
        cdkTrapFocus
        [cdkTrapFocusAutoCapture]="nzAutoFocus !== null"
        class="ant-popover"
        [ngClass]="_classMap"
        [class.ant-popover-rtl]="dir === 'rtl'"
        [ngStyle]="nzOverlayStyle"
        [@.disabled]="!!noAnimation?.nzNoAnimation"
        [nzNoAnimation]="noAnimation?.nzNoAnimation"
        [@zoomBigMotion]="'active'"
      >
        <div class="ant-popover-content">
          @if (nzPopconfirmShowArrow) {
            <div class="ant-popover-arrow">
              <span class="ant-popover-arrow-content"></span>
            </div>
          }
          <div class="ant-popover-inner">
            <div>
              <div class="ant-popover-inner-content">
                <div class="ant-popover-message">
                  <ng-container *nzStringTemplateOutlet="nzTitle; context: nzTitleContext">
                    <ng-container *nzStringTemplateOutlet="nzIcon; let icon">
                      <span class="ant-popover-message-icon">
                        <span nz-icon [nzType]="icon || 'exclamation-circle'" nzTheme="fill"></span>
                      </span>
                    </ng-container>
                    <div class="ant-popover-message-title">{{ nzTitle }}</div>
                  </ng-container>
                </div>
                <div class="ant-popover-buttons">
                  <button
                    nz-button
                    #cancelBtn
                    [nzSize]="'small'"
                    (click)="onCancel()"
                    [attr.cdkFocusInitial]="nzAutoFocus === 'cancel' || null"
                  >
                    @if (nzCancelText) {
                      {{ nzCancelText }}
                    } @else {
                      {{ 'Modal.cancelText' | nzI18n }}
                    }
                  </button>
                  <button
                    nz-button
                    #okBtn
                    [nzSize]="'small'"
                    [nzType]="nzOkType !== 'danger' ? nzOkType : 'primary'"
                    [nzDanger]="nzOkDanger || nzOkType === 'danger'"
                    [nzLoading]="confirmLoading"
                    [disabled]="nzOkDisabled"
                    (click)="onConfirm()"
                    [attr.cdkFocusInitial]="nzAutoFocus === 'ok' || null"
                  >
                    @if (nzOkText) {
                      {{ nzOkText }}
                    } @else {
                      {{ 'Modal.okText' | nzI18n }}
                    }
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ng-template>
  `,
      imports: [OverlayModule, NzOverlayModule, A11yModule, NgClass, NgStyle, NzNoAnimationDirective, NzOutletModule, NzIconModule, NzButtonModule, NzI18nModule],
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }], {
    okBtn: [{
      type: ViewChildren,
      args: ["okBtn", {
        read: ElementRef
      }]
    }],
    cancelBtn: [{
      type: ViewChildren,
      args: ["cancelBtn", {
        read: ElementRef
      }]
    }]
  });
})();
var _NzPopconfirmModule = class _NzPopconfirmModule {
};
_NzPopconfirmModule.ɵfac = function NzPopconfirmModule_Factory(t) {
  return new (t || _NzPopconfirmModule)();
};
_NzPopconfirmModule.ɵmod = ɵɵdefineNgModule({
  type: _NzPopconfirmModule,
  imports: [NzPopconfirmComponent, NzPopconfirmDirective],
  exports: [NzPopconfirmComponent, NzPopconfirmDirective]
});
_NzPopconfirmModule.ɵinj = ɵɵdefineInjector({
  imports: [NzPopconfirmComponent]
});
var NzPopconfirmModule = _NzPopconfirmModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzPopconfirmModule, [{
    type: NgModule,
    args: [{
      imports: [NzPopconfirmComponent, NzPopconfirmDirective],
      exports: [NzPopconfirmComponent, NzPopconfirmDirective]
    }]
  }], null, null);
})();
export {
  NzPopconfirmComponent,
  NzPopconfirmDirective,
  NzPopconfirmModule
};
//# sourceMappingURL=ng-zorro-antd_popconfirm.js.map
