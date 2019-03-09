import { Component, OnInit, Input } from '@angular/core';
import { GaugeBaseComponent } from '../../gauge-base/gauge-base.component'
import { GaugeSettings, Variable, WindowLink, Event } from '../../../_models/hmi';

@Component({
  selector: 'gauge-semaphore',
  templateUrl: './gauge-semaphore.component.html',
  styleUrls: ['./gauge-semaphore.component.css']
})
export class GaugeSemaphoreComponent extends GaugeBaseComponent implements OnInit {

  @Input() data: any;

  static TypeTag = 'svg-ext-gauge_semaphore';
  static LabelTag = 'HtmlSemaphore';

  constructor() {
    super();
  }

  ngOnInit() {
  }

  static getSignal(pro: any) {
    let res: string[] = [];
    if (pro.variableId) {
      res.push(pro.variableId);
    }
    return res;
  }

  static processValue(ga: GaugeSettings, svgele: any, sig: Variable) {
    if (svgele.node && svgele.node.children && svgele.node.children.length <= 1) {
      let g = svgele.node.children[0];
      let clr = '';
      let val = parseFloat(sig.value);
      if (ga.property && ga.property.ranges) {
        for (let idx = 0; idx < ga.property.ranges.length; idx++) {
          if (ga.property.ranges[idx].min <= val && ga.property.ranges[idx].max >= val) {
            clr = ga.property.ranges[idx].color;
          }
        }
        g.setAttribute('fill', clr);
      }
    }
  }
}
