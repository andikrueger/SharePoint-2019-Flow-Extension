declare interface ISharePoint2019FlowCommandCommandSetStrings {
  FlowCommandLabel: string;
  LoadingFlowsCommandLabel: string;
  AddFlow: string;
  ExistingFlows: string;
  ConfigureFlows: string;
}

declare module 'SharePoint2019FlowCommandCommandSetStrings' {
  const strings: ISharePoint2019FlowCommandCommandSetStrings;
  export = strings;
}
