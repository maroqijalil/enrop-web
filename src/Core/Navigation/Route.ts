import React from 'react';

interface Props {
  path: string;
  title?: string;
  component: React.Component<any> | any;
  needAuth?: boolean;
}

class Route {
  private readonly _path: string;
  private readonly _title: string;
  private readonly _component: React.Component<any> | any;
  private readonly _needAuth: boolean;

  constructor(props: Props) {
    const { path, title, component, needAuth } = props;

    this._path = path;
    this._title = title ?? '';
    this._component = component;
    this._needAuth = needAuth ?? true;
  }

  get needAuth(): boolean {
    return this._needAuth;
  }

  get path(): string {
    return this._path;
  }

  get title(): string {
    return this._title;
  }

  get component(): React.Component<any> | any {
    return this._component;
  }
}

export default Route;
