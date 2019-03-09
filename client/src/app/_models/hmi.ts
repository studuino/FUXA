import { Tag, Device } from './device';
import { extend } from 'webdriver-js-extender';

export class Hmi {
    _id: string;
    _version: string;
    name: string = '';
    views: View[] = [];
    // variables: Variable[] = [];
    // alarmes: Alarm[] = [];
    // devices = {};
}

export class View {
    id: string = '';
    name: string = '';
    profile: DocProfile = new DocProfile();
    items: DictionaryGaugeSettings = {};
    variables: DictionaryVariables = {};
    svgcontent: string = '';
}

export class DocProfile {
    width: number = 640;
    height: number = 480;
    bkcolor: string = '';
}

export class MyItem {

}

export class GaugeSettings {
    name: string = '';
    property: any = null;   // set to GaugeProperty after upgrate
    label: string = '';
    constructor(public id: string, public type: string) {
    }
}

export class GaugeProperty {
    variableId: string;
    variableSrc: string;
    variable: string;
    alarmId: string;
    alarmSrc: string;
    alarm: string;
    alarmColor: string;
    ranges: GaugeRangeProperty[];
    events: GaugeEvent[] = [];
}

export class GaugeEvent {
    type: string;
    action: string;
    actparam: string;
}

export enum GaugeEventType {
    click = 'Click',
}

export enum GaugeEventActionType {
    onpage = 'Open Page',
    onwindow = 'Open Window',
    ondialog = 'Open Dialog',
    onSetValue = 'Set Value',
}

export class GaugeRangeProperty {
    min: number;
    max: number;
    text: string;
    color: string;
    type: any;
    style: any;
}

export class Variable {
    id: string;
    name: string;
    source: string;
    value: string;
    constructor(id: string, source: string, name: string) {
        this.id = id; this.name = name; this.source = source;
    }
}

export class VariableRange {
    min: number;
    max: number;
}

export class Alarm extends Tag {
    id: string;
    group: string;
    device: string;
}

export class WindowLink {
    name: string = '';
    title: string = '';
    type: string;
}

export class SelElement {
    type: string = '';
    ele: any = null;
}

export class Event {
    id: string = '';
    dom: any;
    value: any = null;
    dbg: string = '';
    type: string;
    ga: GaugeSettings;
}

interface DictionaryGaugeSettings {
    [x: string]: GaugeSettings
}

interface DictionaryVariables {
    [id: string]: Variable
}
