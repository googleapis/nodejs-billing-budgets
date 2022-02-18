// Copyright 2022 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **

/* global window */
import * as gax from 'google-gax';
import {Callback, CallOptions, Descriptors, ClientOptions, PaginationCallback, GaxCall} from 'google-gax';

import { Transform } from 'stream';
import { RequestType } from 'google-gax/build/src/apitypes';
import * as protos from '../../protos/protos';
import jsonProtos = require('../../protos/protos.json');
/**
 * Client JSON configuration object, loaded from
 * `src/v1/budget_service_client_config.json`.
 * This file defines retry strategy and timeouts for all API methods in this library.
 */
import * as gapicConfig from './budget_service_client_config.json';

const version = require('../../../package.json').version;

/**
 *  BudgetService stores Cloud Billing budgets, which define a
 *  budget plan and rules to execute as we track spend against that plan.
 * @class
 * @memberof v1
 */
export class BudgetServiceClient {
  private _terminated = false;
  private _opts: ClientOptions;
  private _providedCustomServicePath: boolean;
  private _gaxModule: typeof gax | typeof gax.fallback;
  private _gaxGrpc: gax.GrpcClient | gax.fallback.GrpcClient;
  private _protos: {};
  private _defaults: {[method: string]: gax.CallSettings};
  auth: gax.GoogleAuth;
  descriptors: Descriptors = {
    page: {},
    stream: {},
    longrunning: {},
    batching: {},
  };
  warn: (code: string, message: string, warnType?: string) => void;
  innerApiCalls: {[name: string]: Function};
  pathTemplates: {[name: string]: gax.PathTemplate};
  budgetServiceStub?: Promise<{[name: string]: Function}>;

  /**
   * Construct an instance of BudgetServiceClient.
   *
   * @param {object} [options] - The configuration object.
   * The options accepted by the constructor are described in detail
   * in [this document](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#creating-the-client-instance).
   * The common options are:
   * @param {object} [options.credentials] - Credentials object.
   * @param {string} [options.credentials.client_email]
   * @param {string} [options.credentials.private_key]
   * @param {string} [options.email] - Account email address. Required when
   *     using a .pem or .p12 keyFilename.
   * @param {string} [options.keyFilename] - Full path to the a .json, .pem, or
   *     .p12 key downloaded from the Google Developers Console. If you provide
   *     a path to a JSON file, the projectId option below is not necessary.
   *     NOTE: .pem and .p12 require you to specify options.email as well.
   * @param {number} [options.port] - The port on which to connect to
   *     the remote host.
   * @param {string} [options.projectId] - The project ID from the Google
   *     Developer's Console, e.g. 'grape-spaceship-123'. We will also check
   *     the environment variable GCLOUD_PROJECT for your project ID. If your
   *     app is running in an environment which supports
   *     {@link https://developers.google.com/identity/protocols/application-default-credentials Application Default Credentials},
   *     your project ID will be detected automatically.
   * @param {string} [options.apiEndpoint] - The domain name of the
   *     API remote host.
   * @param {gax.ClientConfig} [options.clientConfig] - Client configuration override.
   *     Follows the structure of {@link gapicConfig}.
   * @param {boolean} [options.fallback] - Use HTTP fallback mode.
   *     In fallback mode, a special browser-compatible transport implementation is used
   *     instead of gRPC transport. In browser context (if the `window` object is defined)
   *     the fallback mode is enabled automatically; set `options.fallback` to `false`
   *     if you need to override this behavior.
   */
  constructor(opts?: ClientOptions) {
    // Ensure that options include all the required fields.
    const staticMembers = this.constructor as typeof BudgetServiceClient;
    const servicePath = opts?.servicePath || opts?.apiEndpoint || staticMembers.servicePath;
    this._providedCustomServicePath = !!(opts?.servicePath || opts?.apiEndpoint);
    const port = opts?.port || staticMembers.port;
    const clientConfig = opts?.clientConfig ?? {};
    const fallback = opts?.fallback ?? (typeof window !== 'undefined' && typeof window?.fetch === 'function');
    opts = Object.assign({servicePath, port, clientConfig, fallback}, opts);

    // If scopes are unset in options and we're connecting to a non-default endpoint, set scopes just in case.
    if (servicePath !== staticMembers.servicePath && !('scopes' in opts)) {
      opts['scopes'] = staticMembers.scopes;
    }

    // Choose either gRPC or proto-over-HTTP implementation of google-gax.
    this._gaxModule = opts.fallback ? gax.fallback : gax;

    // Create a `gaxGrpc` object, with any grpc-specific options sent to the client.
    this._gaxGrpc = new this._gaxModule.GrpcClient(opts);

    // Save options to use in initialize() method.
    this._opts = opts;

    // Save the auth object to the client, for use by other methods.
    this.auth = (this._gaxGrpc.auth as gax.GoogleAuth);

    // Set useJWTAccessWithScope on the auth object.
    this.auth.useJWTAccessWithScope = true;

    // Set defaultServicePath on the auth object.
    this.auth.defaultServicePath = staticMembers.servicePath;

    // Set the default scopes in auth client if needed.
    if (servicePath === staticMembers.servicePath) {
      this.auth.defaultScopes = staticMembers.scopes;
    }

    // Determine the client header string.
    const clientHeader = [
      `gax/${this._gaxModule.version}`,
      `gapic/${version}`,
    ];
    if (typeof process !== 'undefined' && 'versions' in process) {
      clientHeader.push(`gl-node/${process.versions.node}`);
    } else {
      clientHeader.push(`gl-web/${this._gaxModule.version}`);
    }
    if (!opts.fallback) {
      clientHeader.push(`grpc/${this._gaxGrpc.grpcVersion}`);
    } else if (opts.fallback === 'rest' ) {
      clientHeader.push(`rest/${this._gaxGrpc.grpcVersion}`);
    }
    if (opts.libName && opts.libVersion) {
      clientHeader.push(`${opts.libName}/${opts.libVersion}`);
    }
    // Load the applicable protos.
    this._protos = this._gaxGrpc.loadProtoJSON(jsonProtos);

    // This API contains "path templates"; forward-slash-separated
    // identifiers to uniquely identify resources within the API.
    // Create useful helper objects for these.
    this.pathTemplates = {
      billingAccountPathTemplate: new this._gaxModule.PathTemplate(
        'billingAccounts/{billing_account}'
      ),
      budgetPathTemplate: new this._gaxModule.PathTemplate(
        'billingAccounts/{billing_account}/budgets/{budget}'
      ),
    };

    // Some of the methods on this service return "paged" results,
    // (e.g. 50 results at a time, with tokens to get subsequent
    // pages). Denote the keys used for pagination and results.
    this.descriptors.page = {
      listBudgets:
          new this._gaxModule.PageDescriptor('pageToken', 'nextPageToken', 'budgets')
    };

    // Put together the default options sent with requests.
    this._defaults = this._gaxGrpc.constructSettings(
        'google.cloud.billing.budgets.v1.BudgetService', gapicConfig as gax.ClientConfig,
        opts.clientConfig || {}, {'x-goog-api-client': clientHeader.join(' ')});

    // Set up a dictionary of "inner API calls"; the core implementation
    // of calling the API is handled in `google-gax`, with this code
    // merely providing the destination and request information.
    this.innerApiCalls = {};

    // Add a warn function to the client constructor so it can be easily tested.
    this.warn = gax.warn;
  }

  /**
   * Initialize the client.
   * Performs asynchronous operations (such as authentication) and prepares the client.
   * This function will be called automatically when any class method is called for the
   * first time, but if you need to initialize it before calling an actual method,
   * feel free to call initialize() directly.
   *
   * You can await on this method if you want to make sure the client is initialized.
   *
   * @returns {Promise} A promise that resolves to an authenticated service stub.
   */
  initialize() {
    // If the client stub promise is already initialized, return immediately.
    if (this.budgetServiceStub) {
      return this.budgetServiceStub;
    }

    // Put together the "service stub" for
    // google.cloud.billing.budgets.v1.BudgetService.
    this.budgetServiceStub = this._gaxGrpc.createStub(
        this._opts.fallback ?
          (this._protos as protobuf.Root).lookupService('google.cloud.billing.budgets.v1.BudgetService') :
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (this._protos as any).google.cloud.billing.budgets.v1.BudgetService,
        this._opts, this._providedCustomServicePath) as Promise<{[method: string]: Function}>;

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    const budgetServiceStubMethods =
        ['createBudget', 'updateBudget', 'getBudget', 'listBudgets', 'deleteBudget'];
    for (const methodName of budgetServiceStubMethods) {
      const callPromise = this.budgetServiceStub.then(
        stub => (...args: Array<{}>) => {
          if (this._terminated) {
            return Promise.reject('The client has already been closed.');
          }
          const func = stub[methodName];
          return func.apply(stub, args);
        },
        (err: Error|null|undefined) => () => {
          throw err;
        });

      const descriptor =
        this.descriptors.page[methodName] ||
        undefined;
      const apiCall = this._gaxModule.createApiCall(
        callPromise,
        this._defaults[methodName],
        descriptor
      );

      this.innerApiCalls[methodName] = apiCall;
    }

    return this.budgetServiceStub;
  }

  /**
   * The DNS address for this API service.
   * @returns {string} The DNS address for this service.
   */
  static get servicePath() {
    return 'billingbudgets.googleapis.com';
  }

  /**
   * The DNS address for this API service - same as servicePath(),
   * exists for compatibility reasons.
   * @returns {string} The DNS address for this service.
   */
  static get apiEndpoint() {
    return 'billingbudgets.googleapis.com';
  }

  /**
   * The port for this API service.
   * @returns {number} The default port for this service.
   */
  static get port() {
    return 443;
  }

  /**
   * The scopes needed to make gRPC calls for every method defined
   * in this service.
   * @returns {string[]} List of default scopes.
   */
  static get scopes() {
    return [
      'https://www.googleapis.com/auth/cloud-billing',
      'https://www.googleapis.com/auth/cloud-platform'
    ];
  }

  getProjectId(): Promise<string>;
  getProjectId(callback: Callback<string, undefined, undefined>): void;
  /**
   * Return the project ID used by this class.
   * @returns {Promise} A promise that resolves to string containing the project ID.
   */
  getProjectId(callback?: Callback<string, undefined, undefined>):
      Promise<string>|void {
    if (callback) {
      this.auth.getProjectId(callback);
      return;
    }
    return this.auth.getProjectId();
  }

  // -------------------
  // -- Service calls --
  // -------------------
/**
 * Creates a new budget. See
 * [Quotas and limits](https://cloud.google.com/billing/quotas)
 * for more information on the limits of the number of budgets you can create.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.parent
 *   Required. The name of the billing account to create the budget in. Values
 *   are of the form `billingAccounts/{billingAccountId}`.
 * @param {google.cloud.billing.budgets.v1.Budget} request.budget
 *   Required. Budget to create.
 * @param {object} [options]
 *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
 * @returns {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [Budget]{@link google.cloud.billing.budgets.v1.Budget}.
 *   Please see the
 *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods)
 *   for more details and examples.
 * @example <caption>include:samples/generated/v1/budget_service.create_budget.js</caption>
 * region_tag:billingbudgets_v1_generated_BudgetService_CreateBudget_async
 */
  createBudget(
      request?: protos.google.cloud.billing.budgets.v1.ICreateBudgetRequest,
      options?: CallOptions):
      Promise<[
        protos.google.cloud.billing.budgets.v1.IBudget,
        protos.google.cloud.billing.budgets.v1.ICreateBudgetRequest|undefined, {}|undefined
      ]>;
  createBudget(
      request: protos.google.cloud.billing.budgets.v1.ICreateBudgetRequest,
      options: CallOptions,
      callback: Callback<
          protos.google.cloud.billing.budgets.v1.IBudget,
          protos.google.cloud.billing.budgets.v1.ICreateBudgetRequest|null|undefined,
          {}|null|undefined>): void;
  createBudget(
      request: protos.google.cloud.billing.budgets.v1.ICreateBudgetRequest,
      callback: Callback<
          protos.google.cloud.billing.budgets.v1.IBudget,
          protos.google.cloud.billing.budgets.v1.ICreateBudgetRequest|null|undefined,
          {}|null|undefined>): void;
  createBudget(
      request?: protos.google.cloud.billing.budgets.v1.ICreateBudgetRequest,
      optionsOrCallback?: CallOptions|Callback<
          protos.google.cloud.billing.budgets.v1.IBudget,
          protos.google.cloud.billing.budgets.v1.ICreateBudgetRequest|null|undefined,
          {}|null|undefined>,
      callback?: Callback<
          protos.google.cloud.billing.budgets.v1.IBudget,
          protos.google.cloud.billing.budgets.v1.ICreateBudgetRequest|null|undefined,
          {}|null|undefined>):
      Promise<[
        protos.google.cloud.billing.budgets.v1.IBudget,
        protos.google.cloud.billing.budgets.v1.ICreateBudgetRequest|undefined, {}|undefined
      ]>|void {
    request = request || {};
    let options: CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    }
    else {
      options = optionsOrCallback as CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      'parent': request.parent || '',
    });
    this.initialize();
    return this.innerApiCalls.createBudget(request, options, callback);
  }
/**
 * Updates a budget and returns the updated budget.
 *
 * WARNING: There are some fields exposed on the Google Cloud Console that
 * aren't available on this API. Budget fields that are not exposed in
 * this API will not be changed by this method.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {google.cloud.billing.budgets.v1.Budget} request.budget
 *   Required. The updated budget object.
 *   The budget to update is specified by the budget name in the budget.
 * @param {google.protobuf.FieldMask} [request.updateMask]
 *   Optional. Indicates which fields in the provided budget to update.
 *   Read-only fields (such as `name`) cannot be changed. If this is not
 *   provided, then only fields with non-default values from the request are
 *   updated. See
 *   https://developers.google.com/protocol-buffers/docs/proto3#default for more
 *   details about default values.
 * @param {object} [options]
 *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
 * @returns {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [Budget]{@link google.cloud.billing.budgets.v1.Budget}.
 *   Please see the
 *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods)
 *   for more details and examples.
 * @example <caption>include:samples/generated/v1/budget_service.update_budget.js</caption>
 * region_tag:billingbudgets_v1_generated_BudgetService_UpdateBudget_async
 */
  updateBudget(
      request?: protos.google.cloud.billing.budgets.v1.IUpdateBudgetRequest,
      options?: CallOptions):
      Promise<[
        protos.google.cloud.billing.budgets.v1.IBudget,
        protos.google.cloud.billing.budgets.v1.IUpdateBudgetRequest|undefined, {}|undefined
      ]>;
  updateBudget(
      request: protos.google.cloud.billing.budgets.v1.IUpdateBudgetRequest,
      options: CallOptions,
      callback: Callback<
          protos.google.cloud.billing.budgets.v1.IBudget,
          protos.google.cloud.billing.budgets.v1.IUpdateBudgetRequest|null|undefined,
          {}|null|undefined>): void;
  updateBudget(
      request: protos.google.cloud.billing.budgets.v1.IUpdateBudgetRequest,
      callback: Callback<
          protos.google.cloud.billing.budgets.v1.IBudget,
          protos.google.cloud.billing.budgets.v1.IUpdateBudgetRequest|null|undefined,
          {}|null|undefined>): void;
  updateBudget(
      request?: protos.google.cloud.billing.budgets.v1.IUpdateBudgetRequest,
      optionsOrCallback?: CallOptions|Callback<
          protos.google.cloud.billing.budgets.v1.IBudget,
          protos.google.cloud.billing.budgets.v1.IUpdateBudgetRequest|null|undefined,
          {}|null|undefined>,
      callback?: Callback<
          protos.google.cloud.billing.budgets.v1.IBudget,
          protos.google.cloud.billing.budgets.v1.IUpdateBudgetRequest|null|undefined,
          {}|null|undefined>):
      Promise<[
        protos.google.cloud.billing.budgets.v1.IBudget,
        protos.google.cloud.billing.budgets.v1.IUpdateBudgetRequest|undefined, {}|undefined
      ]>|void {
    request = request || {};
    let options: CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    }
    else {
      options = optionsOrCallback as CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      'budget.name': request.budget!.name || '',
    });
    this.initialize();
    return this.innerApiCalls.updateBudget(request, options, callback);
  }
/**
 * Returns a budget.
 *
 * WARNING: There are some fields exposed on the Google Cloud Console that
 * aren't available on this API. When reading from the API, you will not
 * see these fields in the return value, though they may have been set
 * in the Cloud Console.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.name
 *   Required. Name of budget to get. Values are of the form
 *   `billingAccounts/{billingAccountId}/budgets/{budgetId}`.
 * @param {object} [options]
 *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
 * @returns {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [Budget]{@link google.cloud.billing.budgets.v1.Budget}.
 *   Please see the
 *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods)
 *   for more details and examples.
 * @example <caption>include:samples/generated/v1/budget_service.get_budget.js</caption>
 * region_tag:billingbudgets_v1_generated_BudgetService_GetBudget_async
 */
  getBudget(
      request?: protos.google.cloud.billing.budgets.v1.IGetBudgetRequest,
      options?: CallOptions):
      Promise<[
        protos.google.cloud.billing.budgets.v1.IBudget,
        protos.google.cloud.billing.budgets.v1.IGetBudgetRequest|undefined, {}|undefined
      ]>;
  getBudget(
      request: protos.google.cloud.billing.budgets.v1.IGetBudgetRequest,
      options: CallOptions,
      callback: Callback<
          protos.google.cloud.billing.budgets.v1.IBudget,
          protos.google.cloud.billing.budgets.v1.IGetBudgetRequest|null|undefined,
          {}|null|undefined>): void;
  getBudget(
      request: protos.google.cloud.billing.budgets.v1.IGetBudgetRequest,
      callback: Callback<
          protos.google.cloud.billing.budgets.v1.IBudget,
          protos.google.cloud.billing.budgets.v1.IGetBudgetRequest|null|undefined,
          {}|null|undefined>): void;
  getBudget(
      request?: protos.google.cloud.billing.budgets.v1.IGetBudgetRequest,
      optionsOrCallback?: CallOptions|Callback<
          protos.google.cloud.billing.budgets.v1.IBudget,
          protos.google.cloud.billing.budgets.v1.IGetBudgetRequest|null|undefined,
          {}|null|undefined>,
      callback?: Callback<
          protos.google.cloud.billing.budgets.v1.IBudget,
          protos.google.cloud.billing.budgets.v1.IGetBudgetRequest|null|undefined,
          {}|null|undefined>):
      Promise<[
        protos.google.cloud.billing.budgets.v1.IBudget,
        protos.google.cloud.billing.budgets.v1.IGetBudgetRequest|undefined, {}|undefined
      ]>|void {
    request = request || {};
    let options: CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    }
    else {
      options = optionsOrCallback as CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      'name': request.name || '',
    });
    this.initialize();
    return this.innerApiCalls.getBudget(request, options, callback);
  }
/**
 * Deletes a budget. Returns successfully if already deleted.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.name
 *   Required. Name of the budget to delete. Values are of the form
 *   `billingAccounts/{billingAccountId}/budgets/{budgetId}`.
 * @param {object} [options]
 *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
 * @returns {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [Empty]{@link google.protobuf.Empty}.
 *   Please see the
 *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods)
 *   for more details and examples.
 * @example <caption>include:samples/generated/v1/budget_service.delete_budget.js</caption>
 * region_tag:billingbudgets_v1_generated_BudgetService_DeleteBudget_async
 */
  deleteBudget(
      request?: protos.google.cloud.billing.budgets.v1.IDeleteBudgetRequest,
      options?: CallOptions):
      Promise<[
        protos.google.protobuf.IEmpty,
        protos.google.cloud.billing.budgets.v1.IDeleteBudgetRequest|undefined, {}|undefined
      ]>;
  deleteBudget(
      request: protos.google.cloud.billing.budgets.v1.IDeleteBudgetRequest,
      options: CallOptions,
      callback: Callback<
          protos.google.protobuf.IEmpty,
          protos.google.cloud.billing.budgets.v1.IDeleteBudgetRequest|null|undefined,
          {}|null|undefined>): void;
  deleteBudget(
      request: protos.google.cloud.billing.budgets.v1.IDeleteBudgetRequest,
      callback: Callback<
          protos.google.protobuf.IEmpty,
          protos.google.cloud.billing.budgets.v1.IDeleteBudgetRequest|null|undefined,
          {}|null|undefined>): void;
  deleteBudget(
      request?: protos.google.cloud.billing.budgets.v1.IDeleteBudgetRequest,
      optionsOrCallback?: CallOptions|Callback<
          protos.google.protobuf.IEmpty,
          protos.google.cloud.billing.budgets.v1.IDeleteBudgetRequest|null|undefined,
          {}|null|undefined>,
      callback?: Callback<
          protos.google.protobuf.IEmpty,
          protos.google.cloud.billing.budgets.v1.IDeleteBudgetRequest|null|undefined,
          {}|null|undefined>):
      Promise<[
        protos.google.protobuf.IEmpty,
        protos.google.cloud.billing.budgets.v1.IDeleteBudgetRequest|undefined, {}|undefined
      ]>|void {
    request = request || {};
    let options: CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    }
    else {
      options = optionsOrCallback as CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      'name': request.name || '',
    });
    this.initialize();
    return this.innerApiCalls.deleteBudget(request, options, callback);
  }

 /**
 * Returns a list of budgets for a billing account.
 *
 * WARNING: There are some fields exposed on the Google Cloud Console that
 * aren't available on this API. When reading from the API, you will not
 * see these fields in the return value, though they may have been set
 * in the Cloud Console.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.parent
 *   Required. Name of billing account to list budgets under. Values
 *   are of the form `billingAccounts/{billingAccountId}`.
 * @param {number} [request.pageSize]
 *   Optional. The maximum number of budgets to return per page.
 *   The default and maximum value are 100.
 * @param {string} [request.pageToken]
 *   Optional. The value returned by the last `ListBudgetsResponse` which
 *   indicates that this is a continuation of a prior `ListBudgets` call,
 *   and that the system should return the next page of data.
 * @param {object} [options]
 *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
 * @returns {Promise} - The promise which resolves to an array.
 *   The first element of the array is Array of [Budget]{@link google.cloud.billing.budgets.v1.Budget}.
 *   The client library will perform auto-pagination by default: it will call the API as many
 *   times as needed and will merge results from all the pages into this array.
 *   Note that it can affect your quota.
 *   We recommend using `listBudgetsAsync()`
 *   method described below for async iteration which you can stop as needed.
 *   Please see the
 *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination)
 *   for more details and examples.
 */
  listBudgets(
      request?: protos.google.cloud.billing.budgets.v1.IListBudgetsRequest,
      options?: CallOptions):
      Promise<[
        protos.google.cloud.billing.budgets.v1.IBudget[],
        protos.google.cloud.billing.budgets.v1.IListBudgetsRequest|null,
        protos.google.cloud.billing.budgets.v1.IListBudgetsResponse
      ]>;
  listBudgets(
      request: protos.google.cloud.billing.budgets.v1.IListBudgetsRequest,
      options: CallOptions,
      callback: PaginationCallback<
          protos.google.cloud.billing.budgets.v1.IListBudgetsRequest,
          protos.google.cloud.billing.budgets.v1.IListBudgetsResponse|null|undefined,
          protos.google.cloud.billing.budgets.v1.IBudget>): void;
  listBudgets(
      request: protos.google.cloud.billing.budgets.v1.IListBudgetsRequest,
      callback: PaginationCallback<
          protos.google.cloud.billing.budgets.v1.IListBudgetsRequest,
          protos.google.cloud.billing.budgets.v1.IListBudgetsResponse|null|undefined,
          protos.google.cloud.billing.budgets.v1.IBudget>): void;
  listBudgets(
      request?: protos.google.cloud.billing.budgets.v1.IListBudgetsRequest,
      optionsOrCallback?: CallOptions|PaginationCallback<
          protos.google.cloud.billing.budgets.v1.IListBudgetsRequest,
          protos.google.cloud.billing.budgets.v1.IListBudgetsResponse|null|undefined,
          protos.google.cloud.billing.budgets.v1.IBudget>,
      callback?: PaginationCallback<
          protos.google.cloud.billing.budgets.v1.IListBudgetsRequest,
          protos.google.cloud.billing.budgets.v1.IListBudgetsResponse|null|undefined,
          protos.google.cloud.billing.budgets.v1.IBudget>):
      Promise<[
        protos.google.cloud.billing.budgets.v1.IBudget[],
        protos.google.cloud.billing.budgets.v1.IListBudgetsRequest|null,
        protos.google.cloud.billing.budgets.v1.IListBudgetsResponse
      ]>|void {
    request = request || {};
    let options: CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    }
    else {
      options = optionsOrCallback as CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      'parent': request.parent || '',
    });
    this.initialize();
    return this.innerApiCalls.listBudgets(request, options, callback);
  }

/**
 * Equivalent to `method.name.toCamelCase()`, but returns a NodeJS Stream object.
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.parent
 *   Required. Name of billing account to list budgets under. Values
 *   are of the form `billingAccounts/{billingAccountId}`.
 * @param {number} [request.pageSize]
 *   Optional. The maximum number of budgets to return per page.
 *   The default and maximum value are 100.
 * @param {string} [request.pageToken]
 *   Optional. The value returned by the last `ListBudgetsResponse` which
 *   indicates that this is a continuation of a prior `ListBudgets` call,
 *   and that the system should return the next page of data.
 * @param {object} [options]
 *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
 * @returns {Stream}
 *   An object stream which emits an object representing [Budget]{@link google.cloud.billing.budgets.v1.Budget} on 'data' event.
 *   The client library will perform auto-pagination by default: it will call the API as many
 *   times as needed. Note that it can affect your quota.
 *   We recommend using `listBudgetsAsync()`
 *   method described below for async iteration which you can stop as needed.
 *   Please see the
 *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination)
 *   for more details and examples.
 */
  listBudgetsStream(
      request?: protos.google.cloud.billing.budgets.v1.IListBudgetsRequest,
      options?: CallOptions):
    Transform{
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      'parent': request.parent || '',
    });
    const defaultCallSettings = this._defaults['listBudgets'];
    const callSettings = defaultCallSettings.merge(options);
    this.initialize();
    return this.descriptors.page.listBudgets.createStream(
      this.innerApiCalls.listBudgets as gax.GaxCall,
      request,
      callSettings
    );
  }

/**
 * Equivalent to `listBudgets`, but returns an iterable object.
 *
 * `for`-`await`-`of` syntax is used with the iterable to get response elements on-demand.
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.parent
 *   Required. Name of billing account to list budgets under. Values
 *   are of the form `billingAccounts/{billingAccountId}`.
 * @param {number} [request.pageSize]
 *   Optional. The maximum number of budgets to return per page.
 *   The default and maximum value are 100.
 * @param {string} [request.pageToken]
 *   Optional. The value returned by the last `ListBudgetsResponse` which
 *   indicates that this is a continuation of a prior `ListBudgets` call,
 *   and that the system should return the next page of data.
 * @param {object} [options]
 *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
 * @returns {Object}
 *   An iterable Object that allows [async iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols).
 *   When you iterate the returned iterable, each element will be an object representing
 *   [Budget]{@link google.cloud.billing.budgets.v1.Budget}. The API will be called under the hood as needed, once per the page,
 *   so you can stop the iteration when you don't need more results.
 *   Please see the
 *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination)
 *   for more details and examples.
 * @example <caption>include:samples/generated/v1/budget_service.list_budgets.js</caption>
 * region_tag:billingbudgets_v1_generated_BudgetService_ListBudgets_async
 */
  listBudgetsAsync(
      request?: protos.google.cloud.billing.budgets.v1.IListBudgetsRequest,
      options?: CallOptions):
    AsyncIterable<protos.google.cloud.billing.budgets.v1.IBudget>{
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      'parent': request.parent || '',
    });
    const defaultCallSettings = this._defaults['listBudgets'];
    const callSettings = defaultCallSettings.merge(options);
    this.initialize();
    return this.descriptors.page.listBudgets.asyncIterate(
      this.innerApiCalls['listBudgets'] as GaxCall,
      request as unknown as RequestType,
      callSettings
    ) as AsyncIterable<protos.google.cloud.billing.budgets.v1.IBudget>;
  }
  // --------------------
  // -- Path templates --
  // --------------------

  /**
   * Return a fully-qualified billingAccount resource name string.
   *
   * @param {string} billing_account
   * @returns {string} Resource name string.
   */
  billingAccountPath(billingAccount:string) {
    return this.pathTemplates.billingAccountPathTemplate.render({
      billing_account: billingAccount,
    });
  }

  /**
   * Parse the billing_account from BillingAccount resource.
   *
   * @param {string} billingAccountName
   *   A fully-qualified path representing BillingAccount resource.
   * @returns {string} A string representing the billing_account.
   */
  matchBillingAccountFromBillingAccountName(billingAccountName: string) {
    return this.pathTemplates.billingAccountPathTemplate.match(billingAccountName).billing_account;
  }

  /**
   * Return a fully-qualified budget resource name string.
   *
   * @param {string} billing_account
   * @param {string} budget
   * @returns {string} Resource name string.
   */
  budgetPath(billingAccount:string,budget:string) {
    return this.pathTemplates.budgetPathTemplate.render({
      billing_account: billingAccount,
      budget: budget,
    });
  }

  /**
   * Parse the billing_account from Budget resource.
   *
   * @param {string} budgetName
   *   A fully-qualified path representing Budget resource.
   * @returns {string} A string representing the billing_account.
   */
  matchBillingAccountFromBudgetName(budgetName: string) {
    return this.pathTemplates.budgetPathTemplate.match(budgetName).billing_account;
  }

  /**
   * Parse the budget from Budget resource.
   *
   * @param {string} budgetName
   *   A fully-qualified path representing Budget resource.
   * @returns {string} A string representing the budget.
   */
  matchBudgetFromBudgetName(budgetName: string) {
    return this.pathTemplates.budgetPathTemplate.match(budgetName).budget;
  }

  /**
   * Terminate the gRPC channel and close the client.
   *
   * The client will no longer be usable and all future behavior is undefined.
   * @returns {Promise} A promise that resolves when the client is closed.
   */
  close(): Promise<void> {
    if (this.budgetServiceStub && !this._terminated) {
      return this.budgetServiceStub.then(stub => {
        this._terminated = true;
        stub.close();
      });
    }
    return Promise.resolve();
  }
}
