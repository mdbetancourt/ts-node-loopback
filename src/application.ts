import { BootMixin } from '@loopback/boot';
import { ApplicationConfig } from '@loopback/core';
import { RepositoryMixin } from '@loopback/repository';
import { RestApplication } from '@loopback/rest';
import {
  RestExplorerBindings,
  RestExplorerComponent
} from '@loopback/rest-explorer';
import { ServiceMixin } from '@loopback/service-proxy';
import path from 'path';
import { MySequence } from './sequence';

export { ApplicationConfig };

export class TsNodeLoopbackApplication extends BootMixin(
  ServiceMixin(RepositoryMixin(RestApplication))
) {
  constructor(options: ApplicationConfig = {}) {
    super(options);

    // Set up the custom sequence
    this.sequence(MySequence);
    // Set up default home page
    this.static('/', path.join(__dirname, '../public'));

    // Customize @loopback/rest-explorer configuration here
    this.configure(RestExplorerBindings.COMPONENT).to({
      path: '/explorer'
    });
    this.component(RestExplorerComponent);

    this.projectRoot = __dirname;
    // Customize @loopback/boot Booter Conventions here
    this.bootOptions = {
      controllers: {
        dirs: ['controllers'],
        extensions: '.controller.ts',
        nested: true
      },
      datasources: {
        dirs: ['datasources'],
        extensions: '.datasource.ts',
        nested: true
      },
      interceptors: {
        dirs: ['interceptors'],
        extensions: '.interceptor.ts',
        nested: true
      },
      observers: {
        dirs: ['observers'],
        extensions: '.observer.ts',
        nested: true
      },
      models: {
        dirs: ['models'],
        extensions: '.model.ts',
        nested: true
      },
      repositories: {
        dirs: ['repositories'],
        extensions: '.repository.ts',
        nested: true
      },
      services: {
        dirs: ['services'],
        extensions: '.service.ts',
        nested: true
      }
    };
  }
}
