import {
  NzSkeletonComponent,
  NzSkeletonModule
} from "./chunk-SLCNH7PU.js";
import {
  NzOutletModule,
  NzStringTemplateOutletDirective
} from "./chunk-LLF5WQGB.js";
import {
  BidiModule,
  Directionality
} from "./chunk-XNKJYMG5.js";
import {
  NzConfigService,
  WithConfig
} from "./chunk-7ZIF5OVP.js";
import "./chunk-444SWNZ7.js";
import "./chunk-PBTJFNNQ.js";
import {
  NgIf,
  NgStyle,
  NgTemplateOutlet
} from "./chunk-3RMSGSQC.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  Directive,
  Input,
  InputFlags,
  NgModule,
  TemplateRef,
  ViewChild,
  ViewEncapsulation$1,
  booleanAttribute,
  setClassMetadata,
  ɵɵInputTransformsFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵcontentQuery,
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
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
} from "./chunk-RGUNTEJD.js";
import {
  Subject,
  __decorate,
  takeUntil
} from "./chunk-Q6ZVTVW4.js";
import "./chunk-ASLTLD6L.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-card.mjs
function NzCardMetaComponent_Conditional_0_ng_template_1_Template(rf, ctx) {
}
function NzCardMetaComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 0);
    ɵɵtemplate(1, NzCardMetaComponent_Conditional_0_ng_template_1_Template, 0, 0, "ng-template", 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.nzAvatar);
  }
}
function NzCardMetaComponent_Conditional_1_Conditional_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.nzTitle);
  }
}
function NzCardMetaComponent_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 3);
    ɵɵtemplate(1, NzCardMetaComponent_Conditional_1_Conditional_1_ng_container_1_Template, 2, 1, "ng-container", 5);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("nzStringTemplateOutlet", ctx_r0.nzTitle);
  }
}
function NzCardMetaComponent_Conditional_1_Conditional_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.nzDescription);
  }
}
function NzCardMetaComponent_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 4);
    ɵɵtemplate(1, NzCardMetaComponent_Conditional_1_Conditional_2_ng_container_1_Template, 2, 1, "ng-container", 5);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("nzStringTemplateOutlet", ctx_r0.nzDescription);
  }
}
function NzCardMetaComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 1);
    ɵɵtemplate(1, NzCardMetaComponent_Conditional_1_Conditional_1_Template, 2, 1, "div", 3)(2, NzCardMetaComponent_Conditional_1_Conditional_2_Template, 2, 1, "div", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵconditional(1, ctx_r0.nzTitle ? 1 : -1);
    ɵɵadvance();
    ɵɵconditional(2, ctx_r0.nzDescription ? 2 : -1);
  }
}
var _c0 = ["*"];
function NzCardTabComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0);
  }
}
var _c1 = () => ({
  rows: 4
});
function NzCardComponent_Conditional_0_Conditional_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.nzTitle);
  }
}
function NzCardComponent_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 6);
    ɵɵtemplate(1, NzCardComponent_Conditional_0_Conditional_2_ng_container_1_Template, 2, 1, "ng-container", 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("nzStringTemplateOutlet", ctx_r0.nzTitle);
  }
}
function NzCardComponent_Conditional_0_Conditional_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.nzExtra);
  }
}
function NzCardComponent_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 7);
    ɵɵtemplate(1, NzCardComponent_Conditional_0_Conditional_3_ng_container_1_Template, 2, 1, "ng-container", 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("nzStringTemplateOutlet", ctx_r0.nzExtra);
  }
}
function NzCardComponent_Conditional_0_Conditional_4_ng_template_0_Template(rf, ctx) {
}
function NzCardComponent_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzCardComponent_Conditional_0_Conditional_4_ng_template_0_Template, 0, 0, "ng-template", 8);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.listOfNzCardTabComponent.template);
  }
}
function NzCardComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 0)(1, "div", 5);
    ɵɵtemplate(2, NzCardComponent_Conditional_0_Conditional_2_Template, 2, 1, "div", 6)(3, NzCardComponent_Conditional_0_Conditional_3_Template, 2, 1, "div", 7);
    ɵɵelementEnd();
    ɵɵtemplate(4, NzCardComponent_Conditional_0_Conditional_4_Template, 1, 1, null, 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵconditional(2, ctx_r0.nzTitle ? 2 : -1);
    ɵɵadvance();
    ɵɵconditional(3, ctx_r0.nzExtra ? 3 : -1);
    ɵɵadvance();
    ɵɵconditional(4, ctx_r0.listOfNzCardTabComponent ? 4 : -1);
  }
}
function NzCardComponent_Conditional_1_ng_template_1_Template(rf, ctx) {
}
function NzCardComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 1);
    ɵɵtemplate(1, NzCardComponent_Conditional_1_ng_template_1_Template, 0, 0, "ng-template", 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.nzCover);
  }
}
function NzCardComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-skeleton", 3);
  }
  if (rf & 2) {
    ɵɵproperty("nzActive", true)("nzTitle", false)("nzParagraph", ɵɵpureFunction0(3, _c1));
  }
}
function NzCardComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0);
  }
}
function NzCardComponent_Conditional_5_For_2_ng_template_2_Template(rf, ctx) {
}
function NzCardComponent_Conditional_5_For_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li")(1, "span");
    ɵɵtemplate(2, NzCardComponent_Conditional_5_For_2_ng_template_2_Template, 0, 0, "ng-template", 8);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const action_r2 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵstyleProp("width", 100 / ctx_r0.nzActions.length, "%");
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", action_r2);
  }
}
function NzCardComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "ul", 4);
    ɵɵrepeaterCreate(1, NzCardComponent_Conditional_5_For_2_Template, 3, 3, "li", 10, ɵɵrepeaterTrackByIndex);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵrepeater(ctx_r0.nzActions);
  }
}
var _NzCardGridDirective = class _NzCardGridDirective {
  constructor() {
    this.nzHoverable = true;
  }
};
_NzCardGridDirective.ɵfac = function NzCardGridDirective_Factory(t) {
  return new (t || _NzCardGridDirective)();
};
_NzCardGridDirective.ɵdir = ɵɵdefineDirective({
  type: _NzCardGridDirective,
  selectors: [["", "nz-card-grid", ""]],
  hostAttrs: [1, "ant-card-grid"],
  hostVars: 2,
  hostBindings: function NzCardGridDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("ant-card-hoverable", ctx.nzHoverable);
    }
  },
  inputs: {
    nzHoverable: [InputFlags.HasDecoratorInputTransform, "nzHoverable", "nzHoverable", booleanAttribute]
  },
  exportAs: ["nzCardGrid"],
  standalone: true,
  features: [ɵɵInputTransformsFeature]
});
var NzCardGridDirective = _NzCardGridDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzCardGridDirective, [{
    type: Directive,
    args: [{
      selector: "[nz-card-grid]",
      exportAs: "nzCardGrid",
      host: {
        class: "ant-card-grid",
        "[class.ant-card-hoverable]": "nzHoverable"
      },
      standalone: true
    }]
  }], null, {
    nzHoverable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var _NzCardMetaComponent = class _NzCardMetaComponent {
  constructor() {
    this.nzTitle = null;
    this.nzDescription = null;
    this.nzAvatar = null;
  }
};
_NzCardMetaComponent.ɵfac = function NzCardMetaComponent_Factory(t) {
  return new (t || _NzCardMetaComponent)();
};
_NzCardMetaComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzCardMetaComponent,
  selectors: [["nz-card-meta"]],
  hostAttrs: [1, "ant-card-meta"],
  inputs: {
    nzTitle: "nzTitle",
    nzDescription: "nzDescription",
    nzAvatar: "nzAvatar"
  },
  exportAs: ["nzCardMeta"],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 2,
  vars: 2,
  consts: [[1, "ant-card-meta-avatar"], [1, "ant-card-meta-detail"], [3, "ngTemplateOutlet"], [1, "ant-card-meta-title"], [1, "ant-card-meta-description"], [4, "nzStringTemplateOutlet"]],
  template: function NzCardMetaComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, NzCardMetaComponent_Conditional_0_Template, 2, 1, "div", 0)(1, NzCardMetaComponent_Conditional_1_Template, 3, 2, "div", 1);
    }
    if (rf & 2) {
      ɵɵconditional(0, ctx.nzAvatar ? 0 : -1);
      ɵɵadvance();
      ɵɵconditional(1, ctx.nzTitle || ctx.nzDescription ? 1 : -1);
    }
  },
  dependencies: [NgTemplateOutlet, NzOutletModule, NzStringTemplateOutletDirective],
  encapsulation: 2,
  changeDetection: 0
});
var NzCardMetaComponent = _NzCardMetaComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzCardMetaComponent, [{
    type: Component,
    args: [{
      selector: "nz-card-meta",
      exportAs: "nzCardMeta",
      preserveWhitespaces: false,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      template: `
    @if (nzAvatar) {
      <div class="ant-card-meta-avatar">
        <ng-template [ngTemplateOutlet]="nzAvatar" />
      </div>
    }

    @if (nzTitle || nzDescription) {
      <div class="ant-card-meta-detail">
        @if (nzTitle) {
          <div class="ant-card-meta-title">
            <ng-container *nzStringTemplateOutlet="nzTitle">{{ nzTitle }}</ng-container>
          </div>
        }
        @if (nzDescription) {
          <div class="ant-card-meta-description">
            <ng-container *nzStringTemplateOutlet="nzDescription">{{ nzDescription }}</ng-container>
          </div>
        }
      </div>
    }
  `,
      host: {
        class: "ant-card-meta"
      },
      imports: [NgIf, NgTemplateOutlet, NzOutletModule],
      standalone: true
    }]
  }], () => [], {
    nzTitle: [{
      type: Input
    }],
    nzDescription: [{
      type: Input
    }],
    nzAvatar: [{
      type: Input
    }]
  });
})();
var _NzCardTabComponent = class _NzCardTabComponent {
};
_NzCardTabComponent.ɵfac = function NzCardTabComponent_Factory(t) {
  return new (t || _NzCardTabComponent)();
};
_NzCardTabComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzCardTabComponent,
  selectors: [["nz-card-tab"]],
  viewQuery: function NzCardTabComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(TemplateRef, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.template = _t.first);
    }
  },
  exportAs: ["nzCardTab"],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function NzCardTabComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, NzCardTabComponent_ng_template_0_Template, 1, 0, "ng-template");
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var NzCardTabComponent = _NzCardTabComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzCardTabComponent, [{
    type: Component,
    args: [{
      selector: "nz-card-tab",
      exportAs: "nzCardTab",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <ng-template>
      <ng-content></ng-content>
    </ng-template>
  `,
      standalone: true
    }]
  }], null, {
    template: [{
      type: ViewChild,
      args: [TemplateRef, {
        static: true
      }]
    }]
  });
})();
var NZ_CONFIG_MODULE_NAME = "card";
var _NzCardComponent = class _NzCardComponent {
  constructor(nzConfigService, cdr, directionality) {
    this.nzConfigService = nzConfigService;
    this.cdr = cdr;
    this.directionality = directionality;
    this._nzModuleName = NZ_CONFIG_MODULE_NAME;
    this.nzBordered = true;
    this.nzBorderless = false;
    this.nzLoading = false;
    this.nzHoverable = false;
    this.nzBodyStyle = null;
    this.nzActions = [];
    this.nzType = null;
    this.nzSize = "default";
    this.dir = "ltr";
    this.destroy$ = new Subject();
    this.nzConfigService.getConfigChangeEventForComponent(NZ_CONFIG_MODULE_NAME).pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.cdr.markForCheck();
    });
  }
  ngOnInit() {
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
    this.dir = this.directionality.value;
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
};
_NzCardComponent.ɵfac = function NzCardComponent_Factory(t) {
  return new (t || _NzCardComponent)(ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Directionality));
};
_NzCardComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzCardComponent,
  selectors: [["nz-card"]],
  contentQueries: function NzCardComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, NzCardTabComponent, 5);
      ɵɵcontentQuery(dirIndex, NzCardGridDirective, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.listOfNzCardTabComponent = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.listOfNzCardGridDirective = _t);
    }
  },
  hostAttrs: [1, "ant-card"],
  hostVars: 16,
  hostBindings: function NzCardComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("ant-card-loading", ctx.nzLoading)("ant-card-bordered", ctx.nzBorderless === false && ctx.nzBordered)("ant-card-hoverable", ctx.nzHoverable)("ant-card-small", ctx.nzSize === "small")("ant-card-contain-grid", ctx.listOfNzCardGridDirective && ctx.listOfNzCardGridDirective.length)("ant-card-type-inner", ctx.nzType === "inner")("ant-card-contain-tabs", !!ctx.listOfNzCardTabComponent)("ant-card-rtl", ctx.dir === "rtl");
    }
  },
  inputs: {
    nzBordered: [InputFlags.HasDecoratorInputTransform, "nzBordered", "nzBordered", booleanAttribute],
    nzBorderless: [InputFlags.HasDecoratorInputTransform, "nzBorderless", "nzBorderless", booleanAttribute],
    nzLoading: [InputFlags.HasDecoratorInputTransform, "nzLoading", "nzLoading", booleanAttribute],
    nzHoverable: [InputFlags.HasDecoratorInputTransform, "nzHoverable", "nzHoverable", booleanAttribute],
    nzBodyStyle: "nzBodyStyle",
    nzCover: "nzCover",
    nzActions: "nzActions",
    nzType: "nzType",
    nzSize: "nzSize",
    nzTitle: "nzTitle",
    nzExtra: "nzExtra"
  },
  exportAs: ["nzCard"],
  standalone: true,
  features: [ɵɵInputTransformsFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 6,
  vars: 5,
  consts: [[1, "ant-card-head"], [1, "ant-card-cover"], [1, "ant-card-body", 3, "ngStyle"], [3, "nzActive", "nzTitle", "nzParagraph"], [1, "ant-card-actions"], [1, "ant-card-head-wrapper"], [1, "ant-card-head-title"], [1, "ant-card-extra"], [3, "ngTemplateOutlet"], [4, "nzStringTemplateOutlet"], [3, "width"]],
  template: function NzCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, NzCardComponent_Conditional_0_Template, 5, 3, "div", 0)(1, NzCardComponent_Conditional_1_Template, 2, 1, "div", 1);
      ɵɵelementStart(2, "div", 2);
      ɵɵtemplate(3, NzCardComponent_Conditional_3_Template, 1, 4, "nz-skeleton", 3)(4, NzCardComponent_Conditional_4_Template, 1, 0);
      ɵɵelementEnd();
      ɵɵtemplate(5, NzCardComponent_Conditional_5_Template, 3, 0, "ul", 4);
    }
    if (rf & 2) {
      ɵɵconditional(0, ctx.nzTitle || ctx.nzExtra || ctx.listOfNzCardTabComponent ? 0 : -1);
      ɵɵadvance();
      ɵɵconditional(1, ctx.nzCover ? 1 : -1);
      ɵɵadvance();
      ɵɵproperty("ngStyle", ctx.nzBodyStyle);
      ɵɵadvance();
      ɵɵconditional(3, ctx.nzLoading ? 3 : 4);
      ɵɵadvance(2);
      ɵɵconditional(5, ctx.nzActions.length ? 5 : -1);
    }
  },
  dependencies: [NzOutletModule, NzStringTemplateOutletDirective, NgTemplateOutlet, NgStyle, NzSkeletonModule, NzSkeletonComponent],
  encapsulation: 2,
  changeDetection: 0
});
var NzCardComponent = _NzCardComponent;
__decorate([WithConfig()], NzCardComponent.prototype, "nzBordered", void 0);
__decorate([WithConfig()], NzCardComponent.prototype, "nzBorderless", void 0);
__decorate([WithConfig()], NzCardComponent.prototype, "nzHoverable", void 0);
__decorate([WithConfig()], NzCardComponent.prototype, "nzSize", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzCardComponent, [{
    type: Component,
    args: [{
      selector: "nz-card",
      exportAs: "nzCard",
      preserveWhitespaces: false,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      template: `
    @if (nzTitle || nzExtra || listOfNzCardTabComponent) {
      <div class="ant-card-head">
        <div class="ant-card-head-wrapper">
          @if (nzTitle) {
            <div class="ant-card-head-title">
              <ng-container *nzStringTemplateOutlet="nzTitle">{{ nzTitle }}</ng-container>
            </div>
          }
          @if (nzExtra) {
            <div class="ant-card-extra">
              <ng-container *nzStringTemplateOutlet="nzExtra">{{ nzExtra }}</ng-container>
            </div>
          }
        </div>
        @if (listOfNzCardTabComponent) {
          <ng-template [ngTemplateOutlet]="listOfNzCardTabComponent.template" />
        }
      </div>
    }

    @if (nzCover) {
      <div class="ant-card-cover">
        <ng-template [ngTemplateOutlet]="nzCover" />
      </div>
    }

    <div class="ant-card-body" [ngStyle]="nzBodyStyle">
      @if (nzLoading) {
        <nz-skeleton [nzActive]="true" [nzTitle]="false" [nzParagraph]="{ rows: 4 }"></nz-skeleton>
      } @else {
        <ng-content />
      }
    </div>
    @if (nzActions.length) {
      <ul class="ant-card-actions">
        @for (action of nzActions; track $index) {
          <li [style.width.%]="100 / nzActions.length">
            <span><ng-template [ngTemplateOutlet]="action" /></span>
          </li>
        }
      </ul>
    }
  `,
      host: {
        class: "ant-card",
        "[class.ant-card-loading]": "nzLoading",
        "[class.ant-card-bordered]": "nzBorderless === false && nzBordered",
        "[class.ant-card-hoverable]": "nzHoverable",
        "[class.ant-card-small]": 'nzSize === "small"',
        "[class.ant-card-contain-grid]": "listOfNzCardGridDirective && listOfNzCardGridDirective.length",
        "[class.ant-card-type-inner]": 'nzType === "inner"',
        "[class.ant-card-contain-tabs]": "!!listOfNzCardTabComponent",
        "[class.ant-card-rtl]": `dir === 'rtl'`
      },
      imports: [NzOutletModule, NgTemplateOutlet, NgStyle, NzSkeletonModule],
      standalone: true
    }]
  }], () => [{
    type: NzConfigService
  }, {
    type: ChangeDetectorRef
  }, {
    type: Directionality
  }], {
    nzBordered: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzBorderless: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzLoading: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzHoverable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzBodyStyle: [{
      type: Input
    }],
    nzCover: [{
      type: Input
    }],
    nzActions: [{
      type: Input
    }],
    nzType: [{
      type: Input
    }],
    nzSize: [{
      type: Input
    }],
    nzTitle: [{
      type: Input
    }],
    nzExtra: [{
      type: Input
    }],
    listOfNzCardTabComponent: [{
      type: ContentChild,
      args: [NzCardTabComponent, {
        static: false
      }]
    }],
    listOfNzCardGridDirective: [{
      type: ContentChildren,
      args: [NzCardGridDirective]
    }]
  });
})();
var _NzCardModule = class _NzCardModule {
};
_NzCardModule.ɵfac = function NzCardModule_Factory(t) {
  return new (t || _NzCardModule)();
};
_NzCardModule.ɵmod = ɵɵdefineNgModule({
  type: _NzCardModule,
  imports: [NzCardComponent, NzCardGridDirective, NzCardMetaComponent, NzCardTabComponent],
  exports: [BidiModule, NzCardComponent, NzCardGridDirective, NzCardMetaComponent, NzCardTabComponent]
});
_NzCardModule.ɵinj = ɵɵdefineInjector({
  imports: [NzCardComponent, NzCardMetaComponent, BidiModule]
});
var NzCardModule = _NzCardModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzCardModule, [{
    type: NgModule,
    args: [{
      imports: [NzCardComponent, NzCardGridDirective, NzCardMetaComponent, NzCardTabComponent],
      exports: [BidiModule, NzCardComponent, NzCardGridDirective, NzCardMetaComponent, NzCardTabComponent]
    }]
  }], null, null);
})();
export {
  NzCardComponent,
  NzCardGridDirective,
  NzCardMetaComponent,
  NzCardModule,
  NzCardTabComponent
};
//# sourceMappingURL=ng-zorro-antd_card.js.map
