import {
  NzProgressComponent,
  NzProgressModule
} from "./chunk-6H4BYHJY.js";
import {
  NzToolTipModule,
  NzTooltipDirective
} from "./chunk-WFN6SJLD.js";
import {
  NzI18nService
} from "./chunk-EH3HCSPL.js";
import "./chunk-5JIJJDAK.js";
import "./chunk-X4OLXUW3.js";
import {
  NzButtonComponent,
  NzButtonModule
} from "./chunk-Q542OV3V.js";
import "./chunk-P5WCNQZS.js";
import {
  NzTransitionPatchDirective
} from "./chunk-OACI3OD2.js";
import "./chunk-Z7PSAAGN.js";
import "./chunk-OX22V73U.js";
import "./chunk-PXNY5WLW.js";
import "./chunk-DEGCIOYJ.js";
import "./chunk-I3C6U56M.js";
import {
  ENTER
} from "./chunk-USKC76VO.js";
import "./chunk-XZIVNFZQ.js";
import "./chunk-LLF5WQGB.js";
import {
  NzIconDirective,
  NzIconModule
} from "./chunk-3TUHMKZG.js";
import "./chunk-3JSU54FM.js";
import "./chunk-IDCCK3LW.js";
import "./chunk-P3OKEVSS.js";
import "./chunk-J3OF5AMK.js";
import "./chunk-IGQ5H5G3.js";
import {
  Directionality
} from "./chunk-XNKJYMG5.js";
import {
  Platform
} from "./chunk-E5TUG3TZ.js";
import "./chunk-7ZIF5OVP.js";
import {
  toBoolean,
  warn
} from "./chunk-444SWNZ7.js";
import "./chunk-PBTJFNNQ.js";
import "./chunk-XUXDTRYK.js";
import {
  animate,
  style,
  transition,
  trigger
} from "./chunk-RDJJSLCP.js";
import "./chunk-SHIUUSE2.js";
import {
  HttpClient,
  HttpEventType,
  HttpHeaders,
  HttpRequest,
  HttpResponse
} from "./chunk-C4KMBTLC.js";
import {
  DOCUMENT,
  NgClass,
  NgStyle,
  NgTemplateOutlet
} from "./chunk-3RMSGSQC.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  InputFlags,
  NgModule,
  NgZone,
  Output,
  ViewChild,
  ViewEncapsulation$1,
  booleanAttribute,
  inject,
  numberAttribute,
  setClassMetadata,
  ɵɵInputTransformsFeature,
  ɵɵNgOnChangesFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMapInterpolate1,
  ɵɵclassMapInterpolate2,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-RGUNTEJD.js";
import {
  Observable,
  Subject,
  Subscription,
  filter,
  fromEvent,
  map,
  of,
  switchMap,
  takeUntil,
  tap
} from "./chunk-Q6ZVTVW4.js";
import {
  __spreadValues
} from "./chunk-ASLTLD6L.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-upload.mjs
var _c0 = ["file"];
var _c1 = ["nz-upload-btn", ""];
var _c2 = ["*"];
var _c3 = (a0) => ({
  $implicit: a0
});
var _c4 = () => ({
  opacity: 0.5,
  "pointer-events": "none"
});
function NzUploadListComponent_For_1_ng_template_2_Case_0_ng_template_1_Template(rf, ctx) {
}
function NzUploadListComponent_For_1_ng_template_2_Case_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 13);
    ɵɵtemplate(1, NzUploadListComponent_For_1_ng_template_2_Case_0_ng_template_1_Template, 0, 0, "ng-template", 14);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const file_r1 = ɵɵnextContext(2).$implicit;
    const iconNode_r2 = ɵɵreference(5);
    ɵɵclassProp("ant-upload-list-item-file", !file_r1.isUploading);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", iconNode_r2)("ngTemplateOutletContext", ɵɵpureFunction1(4, _c3, file_r1));
  }
}
function NzUploadListComponent_For_1_ng_template_2_Case_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "img", 16);
  }
  if (rf & 2) {
    const file_r1 = ɵɵnextContext(3).$implicit;
    ɵɵproperty("src", file_r1.thumbUrl || file_r1.url, ɵɵsanitizeUrl);
    ɵɵattribute("alt", file_r1.name);
  }
}
function NzUploadListComponent_For_1_ng_template_2_Case_1_Conditional_2_ng_template_0_Template(rf, ctx) {
}
function NzUploadListComponent_For_1_ng_template_2_Case_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzUploadListComponent_For_1_ng_template_2_Case_1_Conditional_2_ng_template_0_Template, 0, 0, "ng-template", 14);
  }
  if (rf & 2) {
    const file_r1 = ɵɵnextContext(3).$implicit;
    const iconNode_r2 = ɵɵreference(5);
    ɵɵproperty("ngTemplateOutlet", iconNode_r2)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c3, file_r1));
  }
}
function NzUploadListComponent_For_1_ng_template_2_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 15);
    ɵɵlistener("click", function NzUploadListComponent_For_1_ng_template_2_Case_1_Template_a_click_0_listener($event) {
      ɵɵrestoreView(_r3);
      const file_r1 = ɵɵnextContext(2).$implicit;
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.handlePreview(file_r1, $event));
    });
    ɵɵtemplate(1, NzUploadListComponent_For_1_ng_template_2_Case_1_Conditional_1_Template, 1, 2, "img", 16)(2, NzUploadListComponent_For_1_ng_template_2_Case_1_Conditional_2_Template, 1, 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const file_r1 = ɵɵnextContext(2).$implicit;
    ɵɵclassProp("ant-upload-list-item-file", !file_r1.isImageUrl);
    ɵɵproperty("href", file_r1.url || file_r1.thumbUrl, ɵɵsanitizeUrl);
    ɵɵadvance();
    ɵɵconditional(1, file_r1.isImageUrl ? 1 : 2);
  }
}
function NzUploadListComponent_For_1_ng_template_2_Case_2_ng_template_1_Template(rf, ctx) {
}
function NzUploadListComponent_For_1_ng_template_2_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 17);
    ɵɵtemplate(1, NzUploadListComponent_For_1_ng_template_2_Case_2_ng_template_1_Template, 0, 0, "ng-template", 14);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const file_r1 = ɵɵnextContext(2).$implicit;
    const iconNode_r2 = ɵɵreference(5);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", iconNode_r2)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c3, file_r1));
  }
}
function NzUploadListComponent_For_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzUploadListComponent_For_1_ng_template_2_Case_0_Template, 2, 6)(1, NzUploadListComponent_For_1_ng_template_2_Case_1_Template, 3, 4)(2, NzUploadListComponent_For_1_ng_template_2_Case_2_Template, 2, 4);
  }
  if (rf & 2) {
    let tmp_17_0;
    const file_r1 = ɵɵnextContext().$implicit;
    ɵɵconditional(0, (tmp_17_0 = file_r1.iconType) === "uploading" ? 0 : tmp_17_0 === "thumbnail" ? 1 : 2);
  }
}
function NzUploadListComponent_For_1_ng_template_4_Conditional_0_Case_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 18);
  }
}
function NzUploadListComponent_For_1_ng_template_4_Conditional_0_Case_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 19);
  }
  if (rf & 2) {
    const file_r5 = ɵɵnextContext(3).$implicit;
    ɵɵproperty("nzType", file_r5.isImageUrl ? "picture" : "file");
  }
}
function NzUploadListComponent_For_1_ng_template_4_Conditional_0_Case_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzUploadListComponent_For_1_ng_template_4_Conditional_0_Case_0_Conditional_0_Template, 1, 0, "span", 18)(1, NzUploadListComponent_For_1_ng_template_4_Conditional_0_Case_0_Conditional_1_Template, 1, 1);
  }
  if (rf & 2) {
    const file_r5 = ɵɵnextContext(2).$implicit;
    ɵɵconditional(0, file_r5.isUploading ? 0 : 1);
  }
}
function NzUploadListComponent_For_1_ng_template_4_Conditional_0_Case_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(5);
    ɵɵtextInterpolate1(" ", ctx_r3.locale.uploading, " ");
  }
}
function NzUploadListComponent_For_1_ng_template_4_Conditional_0_Case_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 19);
  }
  if (rf & 2) {
    const file_r5 = ɵɵnextContext(3).$implicit;
    ɵɵproperty("nzType", file_r5.isImageUrl ? "picture" : "file");
  }
}
function NzUploadListComponent_For_1_ng_template_4_Conditional_0_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzUploadListComponent_For_1_ng_template_4_Conditional_0_Case_1_Conditional_0_Template, 1, 1)(1, NzUploadListComponent_For_1_ng_template_4_Conditional_0_Case_1_Conditional_1_Template, 1, 1);
  }
  if (rf & 2) {
    const file_r5 = ɵɵnextContext(2).$implicit;
    ɵɵconditional(0, file_r5.isUploading ? 0 : 1);
  }
}
function NzUploadListComponent_For_1_ng_template_4_Conditional_0_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 20);
  }
  if (rf & 2) {
    const file_r5 = ɵɵnextContext(2).$implicit;
    ɵɵproperty("nzType", file_r5.isUploading ? "loading" : "paper-clip");
  }
}
function NzUploadListComponent_For_1_ng_template_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzUploadListComponent_For_1_ng_template_4_Conditional_0_Case_0_Template, 2, 1)(1, NzUploadListComponent_For_1_ng_template_4_Conditional_0_Case_1_Template, 2, 1)(2, NzUploadListComponent_For_1_ng_template_4_Conditional_0_Case_2_Template, 1, 1);
  }
  if (rf & 2) {
    let tmp_19_0;
    const ctx_r3 = ɵɵnextContext(3);
    ɵɵconditional(0, (tmp_19_0 = ctx_r3.listType) === "picture" ? 0 : tmp_19_0 === "picture-card" ? 1 : 2);
  }
}
function NzUploadListComponent_For_1_ng_template_4_Conditional_1_ng_template_0_Template(rf, ctx) {
}
function NzUploadListComponent_For_1_ng_template_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzUploadListComponent_For_1_ng_template_4_Conditional_1_ng_template_0_Template, 0, 0, "ng-template", 14);
  }
  if (rf & 2) {
    const file_r5 = ɵɵnextContext().$implicit;
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r3.iconRender)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c3, file_r5));
  }
}
function NzUploadListComponent_For_1_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzUploadListComponent_For_1_ng_template_4_Conditional_0_Template, 3, 1)(1, NzUploadListComponent_For_1_ng_template_4_Conditional_1_Template, 1, 4);
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵconditional(0, !ctx_r3.iconRender ? 0 : 1);
  }
}
function NzUploadListComponent_For_1_ng_template_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 22);
    ɵɵlistener("click", function NzUploadListComponent_For_1_ng_template_6_Conditional_0_Template_button_click_0_listener($event) {
      ɵɵrestoreView(_r6);
      const file_r1 = ɵɵnextContext(2).$implicit;
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.handleRemove(file_r1, $event));
    });
    ɵɵelement(1, "span", 23);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(3);
    ɵɵattribute("title", ctx_r3.locale.removeFile);
  }
}
function NzUploadListComponent_For_1_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzUploadListComponent_For_1_ng_template_6_Conditional_0_Template, 2, 1, "button", 21);
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵconditional(0, ctx_r3.icons.showRemoveIcon ? 0 : -1);
  }
}
function NzUploadListComponent_For_1_ng_template_8_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 22);
    ɵɵlistener("click", function NzUploadListComponent_For_1_ng_template_8_Conditional_0_Template_button_click_0_listener() {
      ɵɵrestoreView(_r7);
      const file_r1 = ɵɵnextContext(2).$implicit;
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.handleDownload(file_r1));
    });
    ɵɵelement(1, "span", 24);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(3);
    ɵɵattribute("title", ctx_r3.locale.downloadFile);
  }
}
function NzUploadListComponent_For_1_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzUploadListComponent_For_1_ng_template_8_Conditional_0_Template, 2, 1, "button", 21);
  }
  if (rf & 2) {
    const file_r1 = ɵɵnextContext().$implicit;
    ɵɵconditional(0, file_r1.showDownload ? 0 : -1);
  }
}
function NzUploadListComponent_For_1_ng_template_10_Conditional_0_ng_template_1_Template(rf, ctx) {
}
function NzUploadListComponent_For_1_ng_template_10_Conditional_0_ng_template_2_Template(rf, ctx) {
}
function NzUploadListComponent_For_1_ng_template_10_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtemplate(1, NzUploadListComponent_For_1_ng_template_10_Conditional_0_ng_template_1_Template, 0, 0, "ng-template", 10)(2, NzUploadListComponent_For_1_ng_template_10_Conditional_0_ng_template_2_Template, 0, 0, "ng-template", 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵnextContext(2);
    const removeIcon_r8 = ɵɵreference(7);
    const downloadIcon_r9 = ɵɵreference(9);
    const ctx_r3 = ɵɵnextContext();
    ɵɵclassMapInterpolate1("ant-upload-list-item-card-actions ", ctx_r3.listType === "picture" ? "picture" : "", "");
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", downloadIcon_r9);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", removeIcon_r8);
  }
}
function NzUploadListComponent_For_1_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzUploadListComponent_For_1_ng_template_10_Conditional_0_Template, 3, 5, "span", 6);
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵconditional(0, ctx_r3.listType !== "picture-card" ? 0 : -1);
  }
}
function NzUploadListComponent_For_1_ng_template_12_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 26);
    ɵɵlistener("click", function NzUploadListComponent_For_1_ng_template_12_Conditional_0_Template_a_click_0_listener($event) {
      ɵɵrestoreView(_r10);
      const file_r1 = ɵɵnextContext(2).$implicit;
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.handlePreview(file_r1, $event));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const file_r1 = ɵɵnextContext(2).$implicit;
    ɵɵproperty("href", file_r1.url, ɵɵsanitizeUrl);
    ɵɵattribute("title", file_r1.name)("download", file_r1.linkProps && file_r1.linkProps.download);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", file_r1.name, " ");
  }
}
function NzUploadListComponent_For_1_ng_template_12_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 27);
    ɵɵlistener("click", function NzUploadListComponent_For_1_ng_template_12_Conditional_1_Template_span_click_0_listener($event) {
      ɵɵrestoreView(_r11);
      const file_r1 = ɵɵnextContext(2).$implicit;
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.handlePreview(file_r1, $event));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const file_r1 = ɵɵnextContext(2).$implicit;
    ɵɵattribute("title", file_r1.name);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", file_r1.name, " ");
  }
}
function NzUploadListComponent_For_1_ng_template_12_ng_template_2_Template(rf, ctx) {
}
function NzUploadListComponent_For_1_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzUploadListComponent_For_1_ng_template_12_Conditional_0_Template, 2, 4, "a", 25)(1, NzUploadListComponent_For_1_ng_template_12_Conditional_1_Template, 2, 2)(2, NzUploadListComponent_For_1_ng_template_12_ng_template_2_Template, 0, 0, "ng-template", 10);
  }
  if (rf & 2) {
    const file_r1 = ɵɵnextContext().$implicit;
    const downloadOrDelete_r12 = ɵɵreference(11);
    ɵɵconditional(0, file_r1.url ? 0 : 1);
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", downloadOrDelete_r12);
  }
}
function NzUploadListComponent_For_1_ng_template_16_Template(rf, ctx) {
}
function NzUploadListComponent_For_1_ng_template_17_Template(rf, ctx) {
}
function NzUploadListComponent_For_1_Conditional_18_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 29);
    ɵɵlistener("click", function NzUploadListComponent_For_1_Conditional_18_Conditional_1_Template_a_click_0_listener($event) {
      ɵɵrestoreView(_r13);
      const file_r1 = ɵɵnextContext(2).$implicit;
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.handlePreview(file_r1, $event));
    });
    ɵɵelement(1, "span", 30);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const file_r1 = ɵɵnextContext(2).$implicit;
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("href", file_r1.url || file_r1.thumbUrl, ɵɵsanitizeUrl)("ngStyle", !(file_r1.url || file_r1.thumbUrl) ? ɵɵpureFunction0(3, _c4) : null);
    ɵɵattribute("title", ctx_r3.locale.previewFile);
  }
}
function NzUploadListComponent_For_1_Conditional_18_Conditional_2_ng_template_0_Template(rf, ctx) {
}
function NzUploadListComponent_For_1_Conditional_18_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzUploadListComponent_For_1_Conditional_18_Conditional_2_ng_template_0_Template, 0, 0, "ng-template", 10);
  }
  if (rf & 2) {
    ɵɵnextContext(2);
    const downloadIcon_r9 = ɵɵreference(9);
    ɵɵproperty("ngTemplateOutlet", downloadIcon_r9);
  }
}
function NzUploadListComponent_For_1_Conditional_18_ng_template_3_Template(rf, ctx) {
}
function NzUploadListComponent_For_1_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 11);
    ɵɵtemplate(1, NzUploadListComponent_For_1_Conditional_18_Conditional_1_Template, 2, 4, "a", 28)(2, NzUploadListComponent_For_1_Conditional_18_Conditional_2_Template, 1, 1, null, 10)(3, NzUploadListComponent_For_1_Conditional_18_ng_template_3_Template, 0, 0, "ng-template", 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const file_r1 = ɵɵnextContext().$implicit;
    const removeIcon_r8 = ɵɵreference(7);
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵconditional(1, ctx_r3.icons.showPreviewIcon ? 1 : -1);
    ɵɵadvance();
    ɵɵconditional(2, file_r1.status === "done" ? 2 : -1);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", removeIcon_r8);
  }
}
function NzUploadListComponent_For_1_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 12);
    ɵɵelement(1, "nz-progress", 31);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const file_r1 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵproperty("nzPercent", file_r1.percent)("nzShowInfo", false)("nzStrokeWidth", 2);
  }
}
function NzUploadListComponent_For_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div")(1, "div", 7);
    ɵɵtemplate(2, NzUploadListComponent_For_1_ng_template_2_Template, 3, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor)(4, NzUploadListComponent_For_1_ng_template_4_Template, 2, 1, "ng-template", null, 1, ɵɵtemplateRefExtractor)(6, NzUploadListComponent_For_1_ng_template_6_Template, 1, 1, "ng-template", null, 2, ɵɵtemplateRefExtractor)(8, NzUploadListComponent_For_1_ng_template_8_Template, 1, 1, "ng-template", null, 3, ɵɵtemplateRefExtractor)(10, NzUploadListComponent_For_1_ng_template_10_Template, 1, 1, "ng-template", null, 4, ɵɵtemplateRefExtractor)(12, NzUploadListComponent_For_1_ng_template_12_Template, 3, 2, "ng-template", null, 5, ɵɵtemplateRefExtractor);
    ɵɵelementStart(14, "div", 8)(15, "span", 9);
    ɵɵtemplate(16, NzUploadListComponent_For_1_ng_template_16_Template, 0, 0, "ng-template", 10)(17, NzUploadListComponent_For_1_ng_template_17_Template, 0, 0, "ng-template", 10);
    ɵɵelementEnd()();
    ɵɵtemplate(18, NzUploadListComponent_For_1_Conditional_18_Template, 4, 3, "span", 11)(19, NzUploadListComponent_For_1_Conditional_19_Template, 2, 3, "div", 12);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const file_r1 = ctx.$implicit;
    const icon_r14 = ɵɵreference(3);
    const preview_r15 = ɵɵreference(13);
    const ctx_r3 = ɵɵnextContext();
    ɵɵclassMapInterpolate1("ant-upload-list-", ctx_r3.listType, "-container");
    ɵɵadvance();
    ɵɵclassMapInterpolate2("ant-upload-list-item ant-upload-list-item-", file_r1.status, " ant-upload-list-item-list-type-", ctx_r3.listType, "");
    ɵɵproperty("@itemState", void 0)("nzTooltipTitle", file_r1.status === "error" ? file_r1.message : null);
    ɵɵattribute("data-key", file_r1.key);
    ɵɵadvance(15);
    ɵɵproperty("ngTemplateOutlet", icon_r14);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", preview_r15);
    ɵɵadvance();
    ɵɵconditional(18, ctx_r3.listType === "picture-card" && !file_r1.isUploading ? 18 : -1);
    ɵɵadvance();
    ɵɵconditional(19, file_r1.isUploading ? 19 : -1);
  }
}
var _c5 = ["uploadComp"];
var _c6 = ["listComp"];
var _c7 = () => [];
function NzUploadComponent_ng_template_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-upload-list", 6, 3);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵstyleProp("display", ctx_r0.nzShowUploadList ? "" : "none");
    ɵɵproperty("locale", ctx_r0.locale)("listType", ctx_r0.nzListType)("items", ctx_r0.nzFileList || ɵɵpureFunction0(13, _c7))("icons", ctx_r0.nzShowUploadList)("iconRender", ctx_r0.nzIconRender)("previewFile", ctx_r0.nzPreviewFile)("previewIsImage", ctx_r0.nzPreviewIsImage)("onPreview", ctx_r0.nzPreview)("onRemove", ctx_r0.onRemove)("onDownload", ctx_r0.nzDownload)("dir", ctx_r0.dir);
  }
}
function NzUploadComponent_ng_template_0_Conditional_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function NzUploadComponent_ng_template_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzUploadComponent_ng_template_0_Conditional_1_ng_container_0_Template, 1, 0, "ng-container", 7);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.nzFileListRender)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c3, ctx_r0.nzFileList));
  }
}
function NzUploadComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzUploadComponent_ng_template_0_Conditional_0_Template, 2, 14, "nz-upload-list", 5)(1, NzUploadComponent_ng_template_0_Conditional_1_Template, 1, 4, "ng-container");
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵconditional(0, ctx_r0.locale && !ctx_r0.nzFileListRender ? 0 : -1);
    ɵɵadvance();
    ɵɵconditional(1, ctx_r0.nzFileListRender ? 1 : -1);
  }
}
function NzUploadComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0);
  }
}
function NzUploadComponent_ng_template_4_ng_template_3_Template(rf, ctx) {
}
function NzUploadComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 8)(1, "div", 9, 4);
    ɵɵtemplate(3, NzUploadComponent_ng_template_4_ng_template_3_Template, 0, 0, "ng-template", 10);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    const con_r2 = ɵɵreference(3);
    ɵɵstyleProp("display", ctx_r0.nzShowButton ? "" : "none");
    ɵɵproperty("ngClass", ctx_r0.classList);
    ɵɵadvance();
    ɵɵproperty("options", ctx_r0._btnOptions);
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", con_r2);
  }
}
function NzUploadComponent_Conditional_6_ng_template_4_Template(rf, ctx) {
}
function NzUploadComponent_Conditional_6_ng_template_5_Template(rf, ctx) {
}
function NzUploadComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 11);
    ɵɵlistener("drop", function NzUploadComponent_Conditional_6_Template_div_drop_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.fileDrop($event));
    })("dragover", function NzUploadComponent_Conditional_6_Template_div_dragover_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.fileDrop($event));
    })("dragleave", function NzUploadComponent_Conditional_6_Template_div_dragleave_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.fileDrop($event));
    });
    ɵɵelementStart(1, "div", 12, 4)(3, "div", 13);
    ɵɵtemplate(4, NzUploadComponent_Conditional_6_ng_template_4_Template, 0, 0, "ng-template", 10);
    ɵɵelementEnd()()();
    ɵɵtemplate(5, NzUploadComponent_Conditional_6_ng_template_5_Template, 0, 0, "ng-template", 10);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    const list_r4 = ɵɵreference(1);
    const con_r2 = ɵɵreference(3);
    ɵɵproperty("ngClass", ctx_r0.classList);
    ɵɵadvance();
    ɵɵproperty("options", ctx_r0._btnOptions);
    ɵɵadvance(3);
    ɵɵproperty("ngTemplateOutlet", con_r2);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", list_r4);
  }
}
function NzUploadComponent_Conditional_7_Conditional_0_ng_template_0_Template(rf, ctx) {
}
function NzUploadComponent_Conditional_7_Conditional_0_ng_template_1_Template(rf, ctx) {
}
function NzUploadComponent_Conditional_7_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzUploadComponent_Conditional_7_Conditional_0_ng_template_0_Template, 0, 0, "ng-template", 10)(1, NzUploadComponent_Conditional_7_Conditional_0_ng_template_1_Template, 0, 0, "ng-template", 10);
  }
  if (rf & 2) {
    ɵɵnextContext(2);
    const list_r4 = ɵɵreference(1);
    const btn_r5 = ɵɵreference(5);
    ɵɵproperty("ngTemplateOutlet", list_r4);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", btn_r5);
  }
}
function NzUploadComponent_Conditional_7_Conditional_1_ng_template_0_Template(rf, ctx) {
}
function NzUploadComponent_Conditional_7_Conditional_1_ng_template_1_Template(rf, ctx) {
}
function NzUploadComponent_Conditional_7_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzUploadComponent_Conditional_7_Conditional_1_ng_template_0_Template, 0, 0, "ng-template", 10)(1, NzUploadComponent_Conditional_7_Conditional_1_ng_template_1_Template, 0, 0, "ng-template", 10);
  }
  if (rf & 2) {
    ɵɵnextContext(2);
    const list_r4 = ɵɵreference(1);
    const btn_r5 = ɵɵreference(5);
    ɵɵproperty("ngTemplateOutlet", btn_r5);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", list_r4);
  }
}
function NzUploadComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzUploadComponent_Conditional_7_Conditional_0_Template, 2, 2)(1, NzUploadComponent_Conditional_7_Conditional_1_Template, 2, 2);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵconditional(0, ctx_r0.nzListType === "picture-card" ? 0 : 1);
  }
}
var _NzUploadBtnComponent = class _NzUploadBtnComponent {
  onClick() {
    if (this.options.disabled || !this.options.openFileDialogOnClick) {
      return;
    }
    this.file.nativeElement.click();
  }
  // skip safari bug
  onFileDrop(e) {
    if (this.options.disabled || e.type === "dragover") {
      e.preventDefault();
      return;
    }
    if (this.options.directory) {
      this.traverseFileTree(e.dataTransfer.items);
    } else {
      const files = Array.prototype.slice.call(e.dataTransfer.files).filter((file) => this.attrAccept(file, this.options.accept));
      if (files.length) {
        this.uploadFiles(files);
      }
    }
    e.preventDefault();
  }
  onChange(e) {
    if (this.options.disabled) {
      return;
    }
    const hie = e.target;
    this.uploadFiles(hie.files);
    hie.value = "";
  }
  traverseFileTree(files) {
    const _traverseFileTree = (item, path) => {
      if (item.isFile) {
        item.file((file) => {
          if (this.attrAccept(file, this.options.accept)) {
            this.uploadFiles([file]);
          }
        });
      } else if (item.isDirectory) {
        const dirReader = item.createReader();
        dirReader.readEntries((entries) => {
          for (const entrieItem of entries) {
            _traverseFileTree(entrieItem, `${path}${item.name}/`);
          }
        });
      }
    };
    for (const file of files) {
      _traverseFileTree(file.webkitGetAsEntry(), "");
    }
  }
  attrAccept(file, acceptedFiles) {
    if (file && acceptedFiles) {
      const acceptedFilesArray = Array.isArray(acceptedFiles) ? acceptedFiles : acceptedFiles.split(",");
      const fileName = `${file.name}`;
      const mimeType = `${file.type}`;
      const baseMimeType = mimeType.replace(/\/.*$/, "");
      return acceptedFilesArray.some((type) => {
        const validType = type.trim();
        if (validType.charAt(0) === ".") {
          return fileName.toLowerCase().indexOf(validType.toLowerCase(), fileName.toLowerCase().length - validType.toLowerCase().length) !== -1;
        } else if (/\/\*$/.test(validType)) {
          return baseMimeType === validType.replace(/\/.*$/, "");
        }
        return mimeType === validType;
      });
    }
    return true;
  }
  attachUid(file) {
    if (!file.uid) {
      file.uid = Math.random().toString(36).substring(2);
    }
    return file;
  }
  uploadFiles(fileList) {
    let filters$ = of(Array.prototype.slice.call(fileList));
    if (this.options.filters) {
      this.options.filters.forEach((f) => {
        filters$ = filters$.pipe(switchMap((list) => {
          const fnRes = f.fn(list);
          return fnRes instanceof Observable ? fnRes : of(fnRes);
        }));
      });
    }
    filters$.subscribe((list) => {
      list.forEach((file) => {
        this.attachUid(file);
        this.upload(file, list);
      });
    }, (e) => {
      warn(`Unhandled upload filter error`, e);
    });
  }
  upload(file, fileList) {
    if (!this.options.beforeUpload) {
      return this.post(file);
    }
    const before = this.options.beforeUpload(file, fileList);
    if (before instanceof Observable) {
      before.subscribe((processedFile) => {
        const processedFileType = Object.prototype.toString.call(processedFile);
        if (processedFileType === "[object File]" || processedFileType === "[object Blob]") {
          this.attachUid(processedFile);
          this.post(processedFile);
        } else if (typeof processedFile === "boolean" && processedFile !== false) {
          this.post(file);
        }
      }, (e) => {
        warn(`Unhandled upload beforeUpload error`, e);
      });
    } else if (before !== false) {
      return this.post(file);
    }
  }
  post(file) {
    if (this.destroy) {
      return;
    }
    let process$ = of(file);
    let transformedFile;
    const opt = this.options;
    const {
      uid
    } = file;
    const {
      action,
      data,
      headers,
      transformFile
    } = opt;
    const args = {
      action: typeof action === "string" ? action : "",
      name: opt.name,
      headers,
      file,
      postFile: file,
      data,
      withCredentials: opt.withCredentials,
      onProgress: opt.onProgress ? (e) => {
        opt.onProgress(e, file);
      } : void 0,
      onSuccess: (ret, xhr) => {
        this.clean(uid);
        opt.onSuccess(ret, file, xhr);
      },
      onError: (xhr) => {
        this.clean(uid);
        opt.onError(xhr, file);
      }
    };
    if (typeof action === "function") {
      const actionResult = action(file);
      if (actionResult instanceof Observable) {
        process$ = process$.pipe(switchMap(() => actionResult), map((res) => {
          args.action = res;
          return file;
        }));
      } else {
        args.action = actionResult;
      }
    }
    if (typeof transformFile === "function") {
      const transformResult = transformFile(file);
      process$ = process$.pipe(switchMap(() => transformResult instanceof Observable ? transformResult : of(transformResult)), tap((newFile) => transformedFile = newFile));
    }
    if (typeof data === "function") {
      const dataResult = data(file);
      if (dataResult instanceof Observable) {
        process$ = process$.pipe(switchMap(() => dataResult), map((res) => {
          args.data = res;
          return transformedFile ?? file;
        }));
      } else {
        args.data = dataResult;
      }
    }
    if (typeof headers === "function") {
      const headersResult = headers(file);
      if (headersResult instanceof Observable) {
        process$ = process$.pipe(switchMap(() => headersResult), map((res) => {
          args.headers = res;
          return transformedFile ?? file;
        }));
      } else {
        args.headers = headersResult;
      }
    }
    process$.subscribe((newFile) => {
      args.postFile = newFile;
      const req$ = (opt.customRequest || this.xhr).call(this, args);
      if (!(req$ instanceof Subscription)) {
        warn(`Must return Subscription type in '[nzCustomRequest]' property`);
      }
      this.reqs[uid] = req$;
      opt.onStart(file);
    });
  }
  xhr(args) {
    const formData = new FormData();
    if (args.data) {
      Object.keys(args.data).map((key) => {
        formData.append(key, args.data[key]);
      });
    }
    formData.append(args.name, args.postFile);
    if (!args.headers) {
      args.headers = {};
    }
    if (args.headers["X-Requested-With"] !== null) {
      args.headers["X-Requested-With"] = `XMLHttpRequest`;
    } else {
      delete args.headers["X-Requested-With"];
    }
    const req = new HttpRequest("POST", args.action, formData, {
      reportProgress: true,
      withCredentials: args.withCredentials,
      headers: new HttpHeaders(args.headers)
    });
    return this.http.request(req).subscribe((event) => {
      if (event.type === HttpEventType.UploadProgress) {
        if (event.total > 0) {
          event.percent = event.loaded / event.total * 100;
        }
        args.onProgress(event, args.file);
      } else if (event instanceof HttpResponse) {
        args.onSuccess(event.body, args.file, event);
      }
    }, (err) => {
      this.abort(args.file);
      args.onError(err, args.file);
    });
  }
  clean(uid) {
    const req$ = this.reqs[uid];
    if (req$ instanceof Subscription) {
      req$.unsubscribe();
    }
    delete this.reqs[uid];
  }
  abort(file) {
    if (file) {
      this.clean(file && file.uid);
    } else {
      Object.keys(this.reqs).forEach((uid) => this.clean(uid));
    }
  }
  constructor(ngZone, elementRef) {
    this.ngZone = ngZone;
    this.elementRef = elementRef;
    this.reqs = {};
    this.destroy = false;
    this.destroy$ = new Subject();
    this.http = inject(HttpClient, {
      optional: true
    });
    if (!this.http) {
      throw new Error(`Not found 'HttpClient', You can configure 'HttpClient' with 'provideHttpClient()' in your root module.`);
    }
  }
  ngOnInit() {
    this.ngZone.runOutsideAngular(() => {
      fromEvent(this.elementRef.nativeElement, "click").pipe(takeUntil(this.destroy$)).subscribe(() => this.onClick());
      fromEvent(this.elementRef.nativeElement, "keydown").pipe(takeUntil(this.destroy$)).subscribe((event) => {
        if (this.options.disabled) {
          return;
        }
        if (event.key === "Enter" || event.keyCode === ENTER) {
          this.onClick();
        }
      });
    });
  }
  ngOnDestroy() {
    this.destroy = true;
    this.destroy$.next();
    this.abort();
  }
};
_NzUploadBtnComponent.ɵfac = function NzUploadBtnComponent_Factory(t) {
  return new (t || _NzUploadBtnComponent)(ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ElementRef));
};
_NzUploadBtnComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzUploadBtnComponent,
  selectors: [["", "nz-upload-btn", ""]],
  viewQuery: function NzUploadBtnComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c0, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.file = _t.first);
    }
  },
  hostAttrs: [1, "ant-upload"],
  hostVars: 4,
  hostBindings: function NzUploadBtnComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("drop", function NzUploadBtnComponent_drop_HostBindingHandler($event) {
        return ctx.onFileDrop($event);
      })("dragover", function NzUploadBtnComponent_dragover_HostBindingHandler($event) {
        return ctx.onFileDrop($event);
      });
    }
    if (rf & 2) {
      ɵɵattribute("tabindex", "0")("role", "button");
      ɵɵclassProp("ant-upload-disabled", ctx.options.disabled);
    }
  },
  inputs: {
    options: "options"
  },
  exportAs: ["nzUploadBtn"],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  attrs: _c1,
  ngContentSelectors: _c2,
  decls: 3,
  vars: 6,
  consts: [["file", ""], ["type", "file", 3, "change", "multiple"]],
  template: function NzUploadBtnComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵprojectionDef();
      ɵɵelementStart(0, "input", 1, 0);
      ɵɵlistener("change", function NzUploadBtnComponent_Template_input_change_0_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onChange($event));
      });
      ɵɵelementEnd();
      ɵɵprojection(2);
    }
    if (rf & 2) {
      ɵɵstyleProp("display", "none");
      ɵɵproperty("multiple", ctx.options.multiple);
      ɵɵattribute("accept", ctx.options.accept)("directory", ctx.options.directory ? "directory" : null)("webkitdirectory", ctx.options.directory ? "webkitdirectory" : null);
    }
  },
  encapsulation: 2
});
var NzUploadBtnComponent = _NzUploadBtnComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzUploadBtnComponent, [{
    type: Component,
    args: [{
      selector: "[nz-upload-btn]",
      exportAs: "nzUploadBtn",
      host: {
        class: "ant-upload",
        "[attr.tabindex]": '"0"',
        "[attr.role]": '"button"',
        "[class.ant-upload-disabled]": "options.disabled",
        "(drop)": "onFileDrop($event)",
        "(dragover)": "onFileDrop($event)"
      },
      preserveWhitespaces: false,
      encapsulation: ViewEncapsulation$1.None,
      standalone: true,
      template: `<!--
  We explicitly bind \`style.display\` to avoid using an inline style
  attribute property (which is not allowed when CSP \`unsafe-inline\`
  is not specified).
-->
<input
  type="file"
  #file
  (change)="onChange($event)"
  [attr.accept]="options.accept"
  [attr.directory]="options.directory ? 'directory' : null"
  [attr.webkitdirectory]="options.directory ? 'webkitdirectory' : null"
  [multiple]="options.multiple"
  [style.display]="'none'"
/>
<ng-content></ng-content>
`
    }]
  }], () => [{
    type: NgZone
  }, {
    type: ElementRef
  }], {
    file: [{
      type: ViewChild,
      args: ["file", {
        static: true
      }]
    }],
    options: [{
      type: Input
    }]
  });
})();
var isImageFileType = (type) => !!type && type.indexOf("image/") === 0;
var MEASURE_SIZE = 200;
var _NzUploadListComponent = class _NzUploadListComponent {
  get showPic() {
    return this.listType === "picture" || this.listType === "picture-card";
  }
  set items(list) {
    this.list = list;
  }
  genErr(file) {
    if (file.response && typeof file.response === "string") {
      return file.response;
    }
    return file.error && file.error.statusText || this.locale.uploadError;
  }
  extname(url) {
    const temp = url.split("/");
    const filename = temp[temp.length - 1];
    const filenameWithoutSuffix = filename.split(/#|\?/)[0];
    return (/\.[^./\\]*$/.exec(filenameWithoutSuffix) || [""])[0];
  }
  isImageUrl(file) {
    if (isImageFileType(file.type)) {
      return true;
    }
    const url = file.thumbUrl || file.url || "";
    if (!url) {
      return false;
    }
    const extension = this.extname(url);
    if (/^data:image\//.test(url) || /(webp|svg|png|gif|jpg|jpeg|jfif|bmp|dpg)$/i.test(extension)) {
      return true;
    } else if (/^data:/.test(url)) {
      return false;
    } else if (extension) {
      return false;
    }
    return true;
  }
  getIconType(file) {
    if (!this.showPic) {
      return "";
    }
    if (file.isUploading || !file.thumbUrl && !file.url) {
      return "uploading";
    } else {
      return "thumbnail";
    }
  }
  previewImage(file) {
    if (!isImageFileType(file.type) || !this.platform.isBrowser) {
      return of("");
    }
    const canvas = this.document.createElement("canvas");
    canvas.width = MEASURE_SIZE;
    canvas.height = MEASURE_SIZE;
    canvas.style.cssText = `position: fixed; left: 0; top: 0; width: ${MEASURE_SIZE}px; height: ${MEASURE_SIZE}px; z-index: 9999; display: none;`;
    this.document.body.appendChild(canvas);
    const ctx = canvas.getContext("2d");
    const img = new Image();
    const objectUrl = URL.createObjectURL(file);
    img.src = objectUrl;
    return fromEvent(img, "load").pipe(map(() => {
      const {
        width,
        height
      } = img;
      let drawWidth = MEASURE_SIZE;
      let drawHeight = MEASURE_SIZE;
      let offsetX = 0;
      let offsetY = 0;
      if (width < height) {
        drawHeight = height * (MEASURE_SIZE / width);
        offsetY = -(drawHeight - drawWidth) / 2;
      } else {
        drawWidth = width * (MEASURE_SIZE / height);
        offsetX = -(drawWidth - drawHeight) / 2;
      }
      try {
        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      } catch {
      }
      const dataURL = canvas.toDataURL();
      this.document.body.removeChild(canvas);
      URL.revokeObjectURL(objectUrl);
      return dataURL;
    }));
  }
  genThumb() {
    if (!this.platform.isBrowser) {
      return;
    }
    const win = window;
    if (!this.showPic || typeof document === "undefined" || typeof win === "undefined" || !win.FileReader || !win.File) {
      return;
    }
    this.list.filter((file) => file.originFileObj instanceof File && file.thumbUrl === void 0).forEach((file) => {
      file.thumbUrl = "";
      const dataUrl$ = (this.previewFile ? this.previewFile(file) : this.previewImage(file.originFileObj)).pipe(takeUntil(this.destroy$));
      this.ngZone.runOutsideAngular(() => {
        dataUrl$.subscribe((dataUrl) => {
          this.ngZone.run(() => {
            file.thumbUrl = dataUrl;
            this.detectChanges();
          });
        });
      });
    });
  }
  showDownload(file) {
    return !!(this.icons.showDownloadIcon && file.status === "done");
  }
  fixData() {
    this.list.forEach((file) => {
      file.isUploading = file.status === "uploading";
      file.message = this.genErr(file);
      file.linkProps = typeof file.linkProps === "string" ? JSON.parse(file.linkProps) : file.linkProps;
      file.isImageUrl = this.previewIsImage ? this.previewIsImage(file) : this.isImageUrl(file);
      file.iconType = this.getIconType(file);
      file.showDownload = this.showDownload(file);
    });
  }
  handlePreview(file, e) {
    if (!this.onPreview) {
      return;
    }
    e.preventDefault();
    return this.onPreview(file);
  }
  handleRemove(file, e) {
    e.preventDefault();
    if (this.onRemove) {
      this.onRemove(file);
    }
    return;
  }
  handleDownload(file) {
    if (typeof this.onDownload === "function") {
      this.onDownload(file);
    } else if (file.url) {
      window.open(file.url);
    }
  }
  // #endregion
  constructor(cdr, ngZone, platform) {
    this.cdr = cdr;
    this.ngZone = ngZone;
    this.platform = platform;
    this.list = [];
    this.locale = {};
    this.iconRender = null;
    this.dir = "ltr";
    this.document = inject(DOCUMENT);
    this.destroy$ = new Subject();
  }
  detectChanges() {
    this.fixData();
    this.cdr.detectChanges();
  }
  ngOnChanges() {
    this.fixData();
    this.genThumb();
  }
  ngOnDestroy() {
    this.destroy$.next();
  }
};
_NzUploadListComponent.ɵfac = function NzUploadListComponent_Factory(t) {
  return new (t || _NzUploadListComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Platform));
};
_NzUploadListComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzUploadListComponent,
  selectors: [["nz-upload-list"]],
  hostAttrs: [1, "ant-upload-list"],
  hostVars: 8,
  hostBindings: function NzUploadListComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("ant-upload-list-rtl", ctx.dir === "rtl")("ant-upload-list-text", ctx.listType === "text")("ant-upload-list-picture", ctx.listType === "picture")("ant-upload-list-picture-card", ctx.listType === "picture-card");
    }
  },
  inputs: {
    locale: "locale",
    listType: "listType",
    items: "items",
    icons: "icons",
    onPreview: "onPreview",
    onRemove: "onRemove",
    onDownload: "onDownload",
    previewFile: "previewFile",
    previewIsImage: "previewIsImage",
    iconRender: "iconRender",
    dir: "dir"
  },
  exportAs: ["nzUploadList"],
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 2,
  vars: 0,
  consts: [["icon", ""], ["iconNode", ""], ["removeIcon", ""], ["downloadIcon", ""], ["downloadOrDelete", ""], ["preview", ""], [3, "class"], ["nz-tooltip", "", 3, "nzTooltipTitle"], [1, "ant-upload-list-item-info"], [1, "ant-upload-span"], [3, "ngTemplateOutlet"], [1, "ant-upload-list-item-actions"], [1, "ant-upload-list-item-progress"], [1, "ant-upload-list-item-thumbnail"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["target", "_blank", "rel", "noopener noreferrer", 1, "ant-upload-list-item-thumbnail", 3, "click", "href"], [1, "ant-upload-list-item-image", 3, "src"], [1, "ant-upload-text-icon"], ["nz-icon", "", "nzType", "loading"], ["nz-icon", "", "nzTheme", "twotone", 3, "nzType"], ["nz-icon", "", 3, "nzType"], ["type", "button", "nz-button", "", "nzType", "text", "nzSize", "small", 1, "ant-upload-list-item-card-actions-btn"], ["type", "button", "nz-button", "", "nzType", "text", "nzSize", "small", 1, "ant-upload-list-item-card-actions-btn", 3, "click"], ["nz-icon", "", "nzType", "delete"], ["nz-icon", "", "nzType", "download"], ["target", "_blank", "rel", "noopener noreferrer", 1, "ant-upload-list-item-name", 3, "href"], ["target", "_blank", "rel", "noopener noreferrer", 1, "ant-upload-list-item-name", 3, "click", "href"], [1, "ant-upload-list-item-name", 3, "click"], ["target", "_blank", "rel", "noopener noreferrer", 3, "href", "ngStyle"], ["target", "_blank", "rel", "noopener noreferrer", 3, "click", "href", "ngStyle"], ["nz-icon", "", "nzType", "eye"], ["nzType", "line", 3, "nzPercent", "nzShowInfo", "nzStrokeWidth"]],
  template: function NzUploadListComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵrepeaterCreate(0, NzUploadListComponent_For_1_Template, 20, 14, "div", 6, ɵɵrepeaterTrackByIdentity);
    }
    if (rf & 2) {
      ɵɵrepeater(ctx.list);
    }
  },
  dependencies: [NzToolTipModule, NzTooltipDirective, NgTemplateOutlet, NzIconModule, NzIconDirective, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NgStyle, NzProgressModule, NzProgressComponent],
  encapsulation: 2,
  data: {
    animation: [trigger("itemState", [transition(":enter", [style({
      height: "0",
      width: "0",
      opacity: 0
    }), animate(150, style({
      height: "*",
      width: "*",
      opacity: 1
    }))]), transition(":leave", [animate(150, style({
      height: "0",
      width: "0",
      opacity: 0
    }))])])]
  },
  changeDetection: 0
});
var NzUploadListComponent = _NzUploadListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzUploadListComponent, [{
    type: Component,
    args: [{
      selector: "nz-upload-list",
      exportAs: "nzUploadList",
      animations: [trigger("itemState", [transition(":enter", [style({
        height: "0",
        width: "0",
        opacity: 0
      }), animate(150, style({
        height: "*",
        width: "*",
        opacity: 1
      }))]), transition(":leave", [animate(150, style({
        height: "0",
        width: "0",
        opacity: 0
      }))])])],
      host: {
        class: "ant-upload-list",
        "[class.ant-upload-list-rtl]": `dir === 'rtl'`,
        "[class.ant-upload-list-text]": `listType === 'text'`,
        "[class.ant-upload-list-picture]": `listType === 'picture'`,
        "[class.ant-upload-list-picture-card]": `listType === 'picture-card'`
      },
      preserveWhitespaces: false,
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [NzToolTipModule, NgTemplateOutlet, NzIconModule, NzButtonModule, NgStyle, NzProgressModule],
      standalone: true,
      template: `@for (file of list; track file) {
  <div class="ant-upload-list-{{ listType }}-container">
    <div
      class="ant-upload-list-item ant-upload-list-item-{{ file.status }} ant-upload-list-item-list-type-{{ listType }}"
      [attr.data-key]="file.key"
      @itemState
      nz-tooltip
      [nzTooltipTitle]="file.status === 'error' ? file.message : null"
    >
      <ng-template #icon>
        @switch (file.iconType) {
          @case ('uploading') {
            <div class="ant-upload-list-item-thumbnail" [class.ant-upload-list-item-file]="!file.isUploading">
              <ng-template [ngTemplateOutlet]="iconNode" [ngTemplateOutletContext]="{ $implicit: file }"></ng-template>
            </div>
          }
          @case ('thumbnail') {
            <a
              class="ant-upload-list-item-thumbnail"
              [class.ant-upload-list-item-file]="!file.isImageUrl"
              target="_blank"
              rel="noopener noreferrer"
              [href]="file.url || file.thumbUrl"
              (click)="handlePreview(file, $event)"
            >
              @if (file.isImageUrl) {
                <img class="ant-upload-list-item-image" [src]="file.thumbUrl || file.url" [attr.alt]="file.name" />
              } @else {
                <ng-template
                  [ngTemplateOutlet]="iconNode"
                  [ngTemplateOutletContext]="{ $implicit: file }"
                ></ng-template>
              }
            </a>
          }
          @default {
            <div class="ant-upload-text-icon">
              <ng-template [ngTemplateOutlet]="iconNode" [ngTemplateOutletContext]="{ $implicit: file }"></ng-template>
            </div>
          }
        }
      </ng-template>

      <ng-template #iconNode let-file>
        @if (!iconRender) {
          @switch (listType) {
            @case ('picture') {
              @if (file.isUploading) {
                <span nz-icon nzType="loading"></span>
              } @else {
                <span nz-icon [nzType]="file.isImageUrl ? 'picture' : 'file'" nzTheme="twotone"></span>
              }
            }
            @case ('picture-card') {
              @if (file.isUploading) {
                {{ locale.uploading }}
              } @else {
                <span nz-icon [nzType]="file.isImageUrl ? 'picture' : 'file'" nzTheme="twotone"></span>
              }
            }
            @default {
              <span nz-icon [nzType]="file.isUploading ? 'loading' : 'paper-clip'"></span>
            }
          }
        } @else {
          <ng-template [ngTemplateOutlet]="iconRender" [ngTemplateOutletContext]="{ $implicit: file }"></ng-template>
        }
      </ng-template>

      <ng-template #removeIcon>
        @if (icons.showRemoveIcon) {
          <button
            type="button"
            nz-button
            nzType="text"
            nzSize="small"
            (click)="handleRemove(file, $event)"
            [attr.title]="locale.removeFile"
            class="ant-upload-list-item-card-actions-btn"
          >
            <span nz-icon nzType="delete"></span>
          </button>
        }
      </ng-template>

      <ng-template #downloadIcon>
        @if (file.showDownload) {
          <button
            type="button"
            nz-button
            nzType="text"
            nzSize="small"
            (click)="handleDownload(file)"
            [attr.title]="locale.downloadFile"
            class="ant-upload-list-item-card-actions-btn"
          >
            <span nz-icon nzType="download"></span>
          </button>
        }
      </ng-template>

      <ng-template #downloadOrDelete>
        @if (listType !== 'picture-card') {
          <span class="ant-upload-list-item-card-actions {{ listType === 'picture' ? 'picture' : '' }}">
            <ng-template [ngTemplateOutlet]="downloadIcon"></ng-template>
            <ng-template [ngTemplateOutlet]="removeIcon"></ng-template>
          </span>
        }
      </ng-template>

      <ng-template #preview>
        @if (file.url) {
          <a
            target="_blank"
            rel="noopener noreferrer"
            class="ant-upload-list-item-name"
            [attr.title]="file.name"
            [href]="file.url"
            [attr.download]="file.linkProps && file.linkProps.download"
            (click)="handlePreview(file, $event)"
          >
            {{ file.name }}
          </a>
        } @else {
          <span class="ant-upload-list-item-name" [attr.title]="file.name" (click)="handlePreview(file, $event)">
            {{ file.name }}
          </span>
        }
        <ng-template [ngTemplateOutlet]="downloadOrDelete"></ng-template>
      </ng-template>

      <div class="ant-upload-list-item-info">
        <span class="ant-upload-span">
          <ng-template [ngTemplateOutlet]="icon"></ng-template>
          <ng-template [ngTemplateOutlet]="preview"></ng-template>
        </span>
      </div>
      @if (listType === 'picture-card' && !file.isUploading) {
        <span class="ant-upload-list-item-actions">
          @if (icons.showPreviewIcon) {
            <a
              [href]="file.url || file.thumbUrl"
              target="_blank"
              rel="noopener noreferrer"
              [attr.title]="locale.previewFile"
              [ngStyle]="!(file.url || file.thumbUrl) ? { opacity: 0.5, 'pointer-events': 'none' } : null"
              (click)="handlePreview(file, $event)"
            >
              <span nz-icon nzType="eye"></span>
            </a>
          }
          @if (file.status === 'done') {
            <ng-template [ngTemplateOutlet]="downloadIcon"></ng-template>
          }
          <ng-template [ngTemplateOutlet]="removeIcon"></ng-template>
        </span>
      }
      @if (file.isUploading) {
        <div class="ant-upload-list-item-progress">
          <nz-progress [nzPercent]="file.percent!" nzType="line" [nzShowInfo]="false" [nzStrokeWidth]="2"></nz-progress>
        </div>
      }
    </div>
  </div>
}
`
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: NgZone
  }, {
    type: Platform
  }], {
    locale: [{
      type: Input
    }],
    listType: [{
      type: Input
    }],
    items: [{
      type: Input
    }],
    icons: [{
      type: Input
    }],
    onPreview: [{
      type: Input
    }],
    onRemove: [{
      type: Input
    }],
    onDownload: [{
      type: Input
    }],
    previewFile: [{
      type: Input
    }],
    previewIsImage: [{
      type: Input
    }],
    iconRender: [{
      type: Input
    }],
    dir: [{
      type: Input
    }]
  });
})();
var _NzUploadComponent = class _NzUploadComponent {
  set nzShowUploadList(value) {
    this._showUploadList = typeof value === "boolean" ? toBoolean(value) : value;
  }
  get nzShowUploadList() {
    return this._showUploadList;
  }
  zipOptions() {
    if (typeof this.nzShowUploadList === "boolean" && this.nzShowUploadList) {
      this.nzShowUploadList = {
        showPreviewIcon: true,
        showRemoveIcon: true,
        showDownloadIcon: true
      };
    }
    const filters = this.nzFilter.slice();
    if (this.nzMultiple && this.nzLimit > 0 && filters.findIndex((w) => w.name === "limit") === -1) {
      filters.push({
        name: "limit",
        fn: (fileList) => fileList.slice(-this.nzLimit)
      });
    }
    if (this.nzSize > 0 && filters.findIndex((w) => w.name === "size") === -1) {
      filters.push({
        name: "size",
        fn: (fileList) => fileList.filter((w) => w.size / 1024 <= this.nzSize)
      });
    }
    if (this.nzFileType && this.nzFileType.length > 0 && filters.findIndex((w) => w.name === "type") === -1) {
      const types = this.nzFileType.split(",");
      filters.push({
        name: "type",
        fn: (fileList) => fileList.filter((w) => ~types.indexOf(w.type))
      });
    }
    this._btnOptions = {
      disabled: this.nzDisabled,
      accept: this.nzAccept,
      action: this.nzAction,
      directory: this.nzDirectory,
      openFileDialogOnClick: this.nzOpenFileDialogOnClick,
      beforeUpload: this.nzBeforeUpload,
      customRequest: this.nzCustomRequest,
      data: this.nzData,
      headers: this.nzHeaders,
      name: this.nzName,
      multiple: this.nzMultiple,
      withCredentials: this.nzWithCredentials,
      filters,
      transformFile: this.nzTransformFile,
      onStart: this.onStart,
      onProgress: this.onProgress,
      onSuccess: this.onSuccess,
      onError: this.onError
    };
    return this;
  }
  // #endregion
  constructor(ngZone, cdr, i18n, directionality) {
    this.ngZone = ngZone;
    this.cdr = cdr;
    this.i18n = i18n;
    this.directionality = directionality;
    this.destroy$ = new Subject();
    this.dir = "ltr";
    this.nzType = "select";
    this.nzLimit = 0;
    this.nzSize = 0;
    this.nzDirectory = false;
    this.nzOpenFileDialogOnClick = true;
    this.nzFilter = [];
    this.nzFileList = [];
    this.nzDisabled = false;
    this.nzListType = "text";
    this.nzMultiple = false;
    this.nzName = "file";
    this._showUploadList = true;
    this.document = inject(DOCUMENT);
    this.nzShowButton = true;
    this.nzWithCredentials = false;
    this.nzIconRender = null;
    this.nzFileListRender = null;
    this.nzChange = new EventEmitter();
    this.nzFileListChange = new EventEmitter();
    this.platform = inject(Platform);
    this.onStart = (file) => {
      if (!this.nzFileList) {
        this.nzFileList = [];
      }
      const targetItem = this.fileToObject(file);
      targetItem.status = "uploading";
      this.nzFileList = this.nzFileList.concat(targetItem);
      this.nzFileListChange.emit(this.nzFileList);
      this.nzChange.emit({
        file: targetItem,
        fileList: this.nzFileList,
        type: "start"
      });
      this.detectChangesList();
    };
    this.onProgress = (e, file) => {
      const fileList = this.nzFileList;
      const targetItem = this.getFileItem(file, fileList);
      targetItem.percent = e.percent;
      this.nzChange.emit({
        event: e,
        file: __spreadValues({}, targetItem),
        fileList: this.nzFileList,
        type: "progress"
      });
      this.detectChangesList();
    };
    this.onSuccess = (res, file) => {
      const fileList = this.nzFileList;
      const targetItem = this.getFileItem(file, fileList);
      targetItem.status = "done";
      targetItem.response = res;
      this.nzChange.emit({
        file: __spreadValues({}, targetItem),
        fileList,
        type: "success"
      });
      this.detectChangesList();
    };
    this.onError = (err, file) => {
      const fileList = this.nzFileList;
      const targetItem = this.getFileItem(file, fileList);
      targetItem.error = err;
      targetItem.status = "error";
      this.nzChange.emit({
        file: __spreadValues({}, targetItem),
        fileList,
        type: "error"
      });
      this.detectChangesList();
    };
    this.onRemove = (file) => {
      this.uploadComp.abort(file);
      file.status = "removed";
      const fnRes = typeof this.nzRemove === "function" ? this.nzRemove(file) : this.nzRemove == null ? true : this.nzRemove;
      (fnRes instanceof Observable ? fnRes : of(fnRes)).pipe(filter((res) => res)).subscribe(() => {
        this.nzFileList = this.removeFileItem(file, this.nzFileList);
        this.nzChange.emit({
          file,
          fileList: this.nzFileList,
          type: "removed"
        });
        this.nzFileListChange.emit(this.nzFileList);
        this.cdr.detectChanges();
      });
    };
    this.prefixCls = "ant-upload";
    this.classList = [];
  }
  // #region upload
  fileToObject(file) {
    return {
      lastModified: file.lastModified,
      lastModifiedDate: file.lastModifiedDate,
      name: file.filename || file.name,
      size: file.size,
      type: file.type,
      uid: file.uid,
      response: file.response,
      error: file.error,
      percent: 0,
      originFileObj: file
    };
  }
  getFileItem(file, fileList) {
    return fileList.filter((item) => item.uid === file.uid)[0];
  }
  removeFileItem(file, fileList) {
    return fileList.filter((item) => item.uid !== file.uid);
  }
  // skip safari bug
  fileDrop(e) {
    if (e.type === this.dragState) {
      return;
    }
    this.dragState = e.type;
    this.setClassMap();
  }
  // #endregion
  // #region list
  detectChangesList() {
    this.cdr.detectChanges();
    this.listComp?.detectChanges();
  }
  setClassMap() {
    let subCls = [];
    if (this.nzType === "drag") {
      if (this.nzFileList.some((file) => file.status === "uploading")) {
        subCls.push(`${this.prefixCls}-drag-uploading`);
      }
      if (this.dragState === "dragover") {
        subCls.push(`${this.prefixCls}-drag-hover`);
      }
    } else {
      subCls = [`${this.prefixCls}-select-${this.nzListType}`];
    }
    this.classList = [this.prefixCls, `${this.prefixCls}-${this.nzType}`, ...subCls, this.nzDisabled && `${this.prefixCls}-disabled` || "", this.dir === "rtl" && `${this.prefixCls}-rtl` || ""].filter((item) => !!item);
    this.cdr.detectChanges();
  }
  // #endregion
  ngOnInit() {
    this.dir = this.directionality.value;
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.setClassMap();
      this.cdr.detectChanges();
    });
    this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.locale = this.i18n.getLocaleData("Upload");
      this.detectChangesList();
    });
  }
  ngAfterViewInit() {
    if (this.platform.FIREFOX) {
      this.ngZone.runOutsideAngular(() => fromEvent(this.document.body, "drop").pipe(takeUntil(this.destroy$)).subscribe((event) => {
        event.preventDefault();
        event.stopPropagation();
      }));
    }
  }
  ngOnChanges() {
    this.zipOptions().setClassMap();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
};
_NzUploadComponent.ɵfac = function NzUploadComponent_Factory(t) {
  return new (t || _NzUploadComponent)(ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NzI18nService), ɵɵdirectiveInject(Directionality));
};
_NzUploadComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzUploadComponent,
  selectors: [["nz-upload"]],
  viewQuery: function NzUploadComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c5, 5);
      ɵɵviewQuery(_c6, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.uploadComp = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.listComp = _t.first);
    }
  },
  hostVars: 2,
  hostBindings: function NzUploadComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("ant-upload-picture-card-wrapper", ctx.nzListType === "picture-card");
    }
  },
  inputs: {
    nzType: "nzType",
    nzLimit: [InputFlags.HasDecoratorInputTransform, "nzLimit", "nzLimit", numberAttribute],
    nzSize: [InputFlags.HasDecoratorInputTransform, "nzSize", "nzSize", numberAttribute],
    nzFileType: "nzFileType",
    nzAccept: "nzAccept",
    nzAction: "nzAction",
    nzDirectory: [InputFlags.HasDecoratorInputTransform, "nzDirectory", "nzDirectory", booleanAttribute],
    nzOpenFileDialogOnClick: [InputFlags.HasDecoratorInputTransform, "nzOpenFileDialogOnClick", "nzOpenFileDialogOnClick", booleanAttribute],
    nzBeforeUpload: "nzBeforeUpload",
    nzCustomRequest: "nzCustomRequest",
    nzData: "nzData",
    nzFilter: "nzFilter",
    nzFileList: "nzFileList",
    nzDisabled: [InputFlags.HasDecoratorInputTransform, "nzDisabled", "nzDisabled", booleanAttribute],
    nzHeaders: "nzHeaders",
    nzListType: "nzListType",
    nzMultiple: [InputFlags.HasDecoratorInputTransform, "nzMultiple", "nzMultiple", booleanAttribute],
    nzName: "nzName",
    nzShowUploadList: "nzShowUploadList",
    nzShowButton: [InputFlags.HasDecoratorInputTransform, "nzShowButton", "nzShowButton", booleanAttribute],
    nzWithCredentials: [InputFlags.HasDecoratorInputTransform, "nzWithCredentials", "nzWithCredentials", booleanAttribute],
    nzRemove: "nzRemove",
    nzPreview: "nzPreview",
    nzPreviewFile: "nzPreviewFile",
    nzPreviewIsImage: "nzPreviewIsImage",
    nzTransformFile: "nzTransformFile",
    nzDownload: "nzDownload",
    nzIconRender: "nzIconRender",
    nzFileListRender: "nzFileListRender"
  },
  outputs: {
    nzChange: "nzChange",
    nzFileListChange: "nzFileListChange"
  },
  exportAs: ["nzUpload"],
  standalone: true,
  features: [ɵɵInputTransformsFeature, ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c2,
  decls: 8,
  vars: 1,
  consts: [["list", ""], ["con", ""], ["btn", ""], ["listComp", ""], ["uploadComp", ""], [3, "display", "locale", "listType", "items", "icons", "iconRender", "previewFile", "previewIsImage", "onPreview", "onRemove", "onDownload", "dir"], [3, "locale", "listType", "items", "icons", "iconRender", "previewFile", "previewIsImage", "onPreview", "onRemove", "onDownload", "dir"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngClass"], ["nz-upload-btn", "", 3, "options"], [3, "ngTemplateOutlet"], [3, "drop", "dragover", "dragleave", "ngClass"], ["nz-upload-btn", "", 1, "ant-upload-btn", 3, "options"], [1, "ant-upload-drag-container"]],
  template: function NzUploadComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, NzUploadComponent_ng_template_0_Template, 2, 2, "ng-template", null, 0, ɵɵtemplateRefExtractor)(2, NzUploadComponent_ng_template_2_Template, 1, 0, "ng-template", null, 1, ɵɵtemplateRefExtractor)(4, NzUploadComponent_ng_template_4_Template, 4, 5, "ng-template", null, 2, ɵɵtemplateRefExtractor)(6, NzUploadComponent_Conditional_6_Template, 6, 4)(7, NzUploadComponent_Conditional_7_Template, 2, 1);
    }
    if (rf & 2) {
      ɵɵadvance(6);
      ɵɵconditional(6, ctx.nzType === "drag" ? 6 : 7);
    }
  },
  dependencies: [NzUploadListComponent, NgTemplateOutlet, NgClass, NzUploadBtnComponent],
  encapsulation: 2,
  changeDetection: 0
});
var NzUploadComponent = _NzUploadComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzUploadComponent, [{
    type: Component,
    args: [{
      selector: "nz-upload",
      exportAs: "nzUpload",
      preserveWhitespaces: false,
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[class.ant-upload-picture-card-wrapper]": 'nzListType === "picture-card"'
      },
      imports: [NzUploadListComponent, NgTemplateOutlet, NgClass, NzUploadBtnComponent],
      standalone: true,
      template: `<ng-template #list>
  @if (locale && !nzFileListRender) {
    <nz-upload-list
      #listComp
      [style.display]="nzShowUploadList ? '' : 'none'"
      [locale]="locale"
      [listType]="nzListType"
      [items]="nzFileList || []"
      [icons]="$any(nzShowUploadList)"
      [iconRender]="nzIconRender"
      [previewFile]="nzPreviewFile"
      [previewIsImage]="nzPreviewIsImage"
      [onPreview]="nzPreview"
      [onRemove]="onRemove"
      [onDownload]="nzDownload"
      [dir]="dir"
    ></nz-upload-list>
  }
  @if (nzFileListRender) {
    <ng-container *ngTemplateOutlet="nzFileListRender; context: { $implicit: nzFileList }"></ng-container>
  }
</ng-template>
<ng-template #con><ng-content></ng-content></ng-template>
<ng-template #btn>
  <div [ngClass]="classList" [style.display]="nzShowButton ? '' : 'none'">
    <div nz-upload-btn #uploadComp [options]="_btnOptions!">
      <ng-template [ngTemplateOutlet]="con"></ng-template>
    </div>
  </div>
</ng-template>
@if (nzType === 'drag') {
  <div [ngClass]="classList" (drop)="fileDrop($event)" (dragover)="fileDrop($event)" (dragleave)="fileDrop($event)">
    <div nz-upload-btn #uploadComp [options]="_btnOptions!" class="ant-upload-btn">
      <div class="ant-upload-drag-container">
        <ng-template [ngTemplateOutlet]="con"></ng-template>
      </div>
    </div>
  </div>
  <ng-template [ngTemplateOutlet]="list"></ng-template>
} @else {
  @if (nzListType === 'picture-card') {
    <ng-template [ngTemplateOutlet]="list"></ng-template>
    <ng-template [ngTemplateOutlet]="btn"></ng-template>
  } @else {
    <ng-template [ngTemplateOutlet]="btn"></ng-template>
    <ng-template [ngTemplateOutlet]="list"></ng-template>
  }
}
`
    }]
  }], () => [{
    type: NgZone
  }, {
    type: ChangeDetectorRef
  }, {
    type: NzI18nService
  }, {
    type: Directionality
  }], {
    uploadComp: [{
      type: ViewChild,
      args: ["uploadComp", {
        static: false
      }]
    }],
    listComp: [{
      type: ViewChild,
      args: ["listComp", {
        static: false
      }]
    }],
    nzType: [{
      type: Input
    }],
    nzLimit: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    nzSize: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    nzFileType: [{
      type: Input
    }],
    nzAccept: [{
      type: Input
    }],
    nzAction: [{
      type: Input
    }],
    nzDirectory: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzOpenFileDialogOnClick: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzBeforeUpload: [{
      type: Input
    }],
    nzCustomRequest: [{
      type: Input
    }],
    nzData: [{
      type: Input
    }],
    nzFilter: [{
      type: Input
    }],
    nzFileList: [{
      type: Input
    }],
    nzDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzHeaders: [{
      type: Input
    }],
    nzListType: [{
      type: Input
    }],
    nzMultiple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzName: [{
      type: Input
    }],
    nzShowUploadList: [{
      type: Input
    }],
    nzShowButton: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzWithCredentials: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzRemove: [{
      type: Input
    }],
    nzPreview: [{
      type: Input
    }],
    nzPreviewFile: [{
      type: Input
    }],
    nzPreviewIsImage: [{
      type: Input
    }],
    nzTransformFile: [{
      type: Input
    }],
    nzDownload: [{
      type: Input
    }],
    nzIconRender: [{
      type: Input
    }],
    nzFileListRender: [{
      type: Input
    }],
    nzChange: [{
      type: Output
    }],
    nzFileListChange: [{
      type: Output
    }]
  });
})();
var _NzUploadModule = class _NzUploadModule {
};
_NzUploadModule.ɵfac = function NzUploadModule_Factory(t) {
  return new (t || _NzUploadModule)();
};
_NzUploadModule.ɵmod = ɵɵdefineNgModule({
  type: _NzUploadModule,
  imports: [NzUploadComponent, NzUploadBtnComponent, NzUploadListComponent],
  exports: [NzUploadComponent]
});
_NzUploadModule.ɵinj = ɵɵdefineInjector({
  imports: [NzUploadComponent, NzUploadListComponent]
});
var NzUploadModule = _NzUploadModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzUploadModule, [{
    type: NgModule,
    args: [{
      imports: [NzUploadComponent, NzUploadBtnComponent, NzUploadListComponent],
      exports: [NzUploadComponent]
    }]
  }], null, null);
})();
export {
  NzUploadBtnComponent,
  NzUploadComponent,
  NzUploadListComponent,
  NzUploadModule
};
//# sourceMappingURL=ng-zorro-antd_upload.js.map
