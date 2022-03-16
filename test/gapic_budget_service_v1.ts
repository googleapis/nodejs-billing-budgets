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

import * as protos from '../protos/protos';
import * as assert from 'assert';
import * as sinon from 'sinon';
import {SinonStub} from 'sinon';
import {describe, it} from 'mocha';
import * as budgetserviceModule from '../src';

import {PassThrough} from 'stream';

import {protobuf} from 'google-gax';

function generateSampleMessage<T extends object>(instance: T) {
  const filledObject = (
    instance.constructor as typeof protobuf.Message
  ).toObject(instance as protobuf.Message<T>, {defaults: true});
  return (instance.constructor as typeof protobuf.Message).fromObject(
    filledObject
  ) as T;
}

function stubSimpleCall<ResponseType>(response?: ResponseType, error?: Error) {
  return error
    ? sinon.stub().rejects(error)
    : sinon.stub().resolves([response]);
}

function stubSimpleCallWithCallback<ResponseType>(
  response?: ResponseType,
  error?: Error
) {
  return error
    ? sinon.stub().callsArgWith(2, error)
    : sinon.stub().callsArgWith(2, null, response);
}

function stubPageStreamingCall<ResponseType>(
  responses?: ResponseType[],
  error?: Error
) {
  const pagingStub = sinon.stub();
  if (responses) {
    for (let i = 0; i < responses.length; ++i) {
      pagingStub.onCall(i).callsArgWith(2, null, responses[i]);
    }
  }
  const transformStub = error
    ? sinon.stub().callsArgWith(2, error)
    : pagingStub;
  const mockStream = new PassThrough({
    objectMode: true,
    transform: transformStub,
  });
  // trigger as many responses as needed
  if (responses) {
    for (let i = 0; i < responses.length; ++i) {
      setImmediate(() => {
        mockStream.write({});
      });
    }
    setImmediate(() => {
      mockStream.end();
    });
  } else {
    setImmediate(() => {
      mockStream.write({});
    });
    setImmediate(() => {
      mockStream.end();
    });
  }
  return sinon.stub().returns(mockStream);
}

function stubAsyncIterationCall<ResponseType>(
  responses?: ResponseType[],
  error?: Error
) {
  let counter = 0;
  const asyncIterable = {
    [Symbol.asyncIterator]() {
      return {
        async next() {
          if (error) {
            return Promise.reject(error);
          }
          if (counter >= responses!.length) {
            return Promise.resolve({done: true, value: undefined});
          }
          return Promise.resolve({done: false, value: responses![counter++]});
        },
      };
    },
  };
  return sinon.stub().returns(asyncIterable);
}

describe('v1.BudgetServiceClient', () => {
  it('has servicePath', () => {
    const servicePath = budgetserviceModule.v1.BudgetServiceClient.servicePath;
    assert(servicePath);
  });

  it('has apiEndpoint', () => {
    const apiEndpoint = budgetserviceModule.v1.BudgetServiceClient.apiEndpoint;
    assert(apiEndpoint);
  });

  it('has port', () => {
    const port = budgetserviceModule.v1.BudgetServiceClient.port;
    assert(port);
    assert(typeof port === 'number');
  });

  it('should create a client with no option', () => {
    const client = new budgetserviceModule.v1.BudgetServiceClient();
    assert(client);
  });

  it('should create a client with gRPC fallback', () => {
    const client = new budgetserviceModule.v1.BudgetServiceClient({
      fallback: true,
    });
    assert(client);
  });

  it('has initialize method and supports deferred initialization', async () => {
    const client = new budgetserviceModule.v1.BudgetServiceClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    assert.strictEqual(client.budgetServiceStub, undefined);
    await client.initialize();
    assert(client.budgetServiceStub);
  });

  it('has close method for the initialized client', done => {
    const client = new budgetserviceModule.v1.BudgetServiceClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    client.initialize();
    assert(client.budgetServiceStub);
    client.close().then(() => {
      done();
    });
  });

  it('has close method for the non-initialized client', done => {
    const client = new budgetserviceModule.v1.BudgetServiceClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    assert.strictEqual(client.budgetServiceStub, undefined);
    client.close().then(() => {
      done();
    });
  });

  it('has getProjectId method', async () => {
    const fakeProjectId = 'fake-project-id';
    const client = new budgetserviceModule.v1.BudgetServiceClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    client.auth.getProjectId = sinon.stub().resolves(fakeProjectId);
    const result = await client.getProjectId();
    assert.strictEqual(result, fakeProjectId);
    assert((client.auth.getProjectId as SinonStub).calledWithExactly());
  });

  it('has getProjectId method with callback', async () => {
    const fakeProjectId = 'fake-project-id';
    const client = new budgetserviceModule.v1.BudgetServiceClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    client.auth.getProjectId = sinon
      .stub()
      .callsArgWith(0, null, fakeProjectId);
    const promise = new Promise((resolve, reject) => {
      client.getProjectId((err?: Error | null, projectId?: string | null) => {
        if (err) {
          reject(err);
        } else {
          resolve(projectId);
        }
      });
    });
    const result = await promise;
    assert.strictEqual(result, fakeProjectId);
  });

  describe('createBudget', () => {
    it('invokes createBudget without error', async () => {
      const client = new budgetserviceModule.v1.BudgetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.billing.budgets.v1.CreateBudgetRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.billing.budgets.v1.Budget()
      );
      client.innerApiCalls.createBudget = stubSimpleCall(expectedResponse);
      const [response] = await client.createBudget(request);
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.createBudget as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes createBudget without error using callback', async () => {
      const client = new budgetserviceModule.v1.BudgetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.billing.budgets.v1.CreateBudgetRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.billing.budgets.v1.Budget()
      );
      client.innerApiCalls.createBudget =
        stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.createBudget(
          request,
          (
            err?: Error | null,
            result?: protos.google.cloud.billing.budgets.v1.IBudget | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.createBudget as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions /*, callback defined above */)
      );
    });

    it('invokes createBudget with error', async () => {
      const client = new budgetserviceModule.v1.BudgetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.billing.budgets.v1.CreateBudgetRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedError = new Error('expected');
      client.innerApiCalls.createBudget = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.createBudget(request), expectedError);
      assert(
        (client.innerApiCalls.createBudget as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes createBudget with closed client', async () => {
      const client = new budgetserviceModule.v1.BudgetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.billing.budgets.v1.CreateBudgetRequest()
      );
      request.parent = '';
      const expectedError = new Error('The client has already been closed.');
      client.close();
      await assert.rejects(client.createBudget(request), expectedError);
    });
  });

  describe('updateBudget', () => {
    it('invokes updateBudget without error', async () => {
      const client = new budgetserviceModule.v1.BudgetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.billing.budgets.v1.UpdateBudgetRequest()
      );
      request.budget = {};
      request.budget.name = '';
      const expectedHeaderRequestParams = 'budget.name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.billing.budgets.v1.Budget()
      );
      client.innerApiCalls.updateBudget = stubSimpleCall(expectedResponse);
      const [response] = await client.updateBudget(request);
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.updateBudget as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes updateBudget without error using callback', async () => {
      const client = new budgetserviceModule.v1.BudgetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.billing.budgets.v1.UpdateBudgetRequest()
      );
      request.budget = {};
      request.budget.name = '';
      const expectedHeaderRequestParams = 'budget.name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.billing.budgets.v1.Budget()
      );
      client.innerApiCalls.updateBudget =
        stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.updateBudget(
          request,
          (
            err?: Error | null,
            result?: protos.google.cloud.billing.budgets.v1.IBudget | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.updateBudget as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions /*, callback defined above */)
      );
    });

    it('invokes updateBudget with error', async () => {
      const client = new budgetserviceModule.v1.BudgetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.billing.budgets.v1.UpdateBudgetRequest()
      );
      request.budget = {};
      request.budget.name = '';
      const expectedHeaderRequestParams = 'budget.name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedError = new Error('expected');
      client.innerApiCalls.updateBudget = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.updateBudget(request), expectedError);
      assert(
        (client.innerApiCalls.updateBudget as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes updateBudget with closed client', async () => {
      const client = new budgetserviceModule.v1.BudgetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.billing.budgets.v1.UpdateBudgetRequest()
      );
      request.budget = {};
      request.budget.name = '';
      const expectedError = new Error('The client has already been closed.');
      client.close();
      await assert.rejects(client.updateBudget(request), expectedError);
    });
  });

  describe('getBudget', () => {
    it('invokes getBudget without error', async () => {
      const client = new budgetserviceModule.v1.BudgetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.billing.budgets.v1.GetBudgetRequest()
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.billing.budgets.v1.Budget()
      );
      client.innerApiCalls.getBudget = stubSimpleCall(expectedResponse);
      const [response] = await client.getBudget(request);
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.getBudget as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes getBudget without error using callback', async () => {
      const client = new budgetserviceModule.v1.BudgetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.billing.budgets.v1.GetBudgetRequest()
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.billing.budgets.v1.Budget()
      );
      client.innerApiCalls.getBudget =
        stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.getBudget(
          request,
          (
            err?: Error | null,
            result?: protos.google.cloud.billing.budgets.v1.IBudget | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.getBudget as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions /*, callback defined above */)
      );
    });

    it('invokes getBudget with error', async () => {
      const client = new budgetserviceModule.v1.BudgetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.billing.budgets.v1.GetBudgetRequest()
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedError = new Error('expected');
      client.innerApiCalls.getBudget = stubSimpleCall(undefined, expectedError);
      await assert.rejects(client.getBudget(request), expectedError);
      assert(
        (client.innerApiCalls.getBudget as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes getBudget with closed client', async () => {
      const client = new budgetserviceModule.v1.BudgetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.billing.budgets.v1.GetBudgetRequest()
      );
      request.name = '';
      const expectedError = new Error('The client has already been closed.');
      client.close();
      await assert.rejects(client.getBudget(request), expectedError);
    });
  });

  describe('deleteBudget', () => {
    it('invokes deleteBudget without error', async () => {
      const client = new budgetserviceModule.v1.BudgetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.billing.budgets.v1.DeleteBudgetRequest()
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.protobuf.Empty()
      );
      client.innerApiCalls.deleteBudget = stubSimpleCall(expectedResponse);
      const [response] = await client.deleteBudget(request);
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.deleteBudget as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes deleteBudget without error using callback', async () => {
      const client = new budgetserviceModule.v1.BudgetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.billing.budgets.v1.DeleteBudgetRequest()
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.protobuf.Empty()
      );
      client.innerApiCalls.deleteBudget =
        stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.deleteBudget(
          request,
          (
            err?: Error | null,
            result?: protos.google.protobuf.IEmpty | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.deleteBudget as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions /*, callback defined above */)
      );
    });

    it('invokes deleteBudget with error', async () => {
      const client = new budgetserviceModule.v1.BudgetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.billing.budgets.v1.DeleteBudgetRequest()
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedError = new Error('expected');
      client.innerApiCalls.deleteBudget = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.deleteBudget(request), expectedError);
      assert(
        (client.innerApiCalls.deleteBudget as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes deleteBudget with closed client', async () => {
      const client = new budgetserviceModule.v1.BudgetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.billing.budgets.v1.DeleteBudgetRequest()
      );
      request.name = '';
      const expectedError = new Error('The client has already been closed.');
      client.close();
      await assert.rejects(client.deleteBudget(request), expectedError);
    });
  });

  describe('listBudgets', () => {
    it('invokes listBudgets without error', async () => {
      const client = new budgetserviceModule.v1.BudgetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.billing.budgets.v1.ListBudgetsRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = [
        generateSampleMessage(
          new protos.google.cloud.billing.budgets.v1.Budget()
        ),
        generateSampleMessage(
          new protos.google.cloud.billing.budgets.v1.Budget()
        ),
        generateSampleMessage(
          new protos.google.cloud.billing.budgets.v1.Budget()
        ),
      ];
      client.innerApiCalls.listBudgets = stubSimpleCall(expectedResponse);
      const [response] = await client.listBudgets(request);
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.listBudgets as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes listBudgets without error using callback', async () => {
      const client = new budgetserviceModule.v1.BudgetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.billing.budgets.v1.ListBudgetsRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = [
        generateSampleMessage(
          new protos.google.cloud.billing.budgets.v1.Budget()
        ),
        generateSampleMessage(
          new protos.google.cloud.billing.budgets.v1.Budget()
        ),
        generateSampleMessage(
          new protos.google.cloud.billing.budgets.v1.Budget()
        ),
      ];
      client.innerApiCalls.listBudgets =
        stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.listBudgets(
          request,
          (
            err?: Error | null,
            result?: protos.google.cloud.billing.budgets.v1.IBudget[] | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.listBudgets as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions /*, callback defined above */)
      );
    });

    it('invokes listBudgets with error', async () => {
      const client = new budgetserviceModule.v1.BudgetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.billing.budgets.v1.ListBudgetsRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedError = new Error('expected');
      client.innerApiCalls.listBudgets = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.listBudgets(request), expectedError);
      assert(
        (client.innerApiCalls.listBudgets as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes listBudgetsStream without error', async () => {
      const client = new budgetserviceModule.v1.BudgetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.billing.budgets.v1.ListBudgetsRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedResponse = [
        generateSampleMessage(
          new protos.google.cloud.billing.budgets.v1.Budget()
        ),
        generateSampleMessage(
          new protos.google.cloud.billing.budgets.v1.Budget()
        ),
        generateSampleMessage(
          new protos.google.cloud.billing.budgets.v1.Budget()
        ),
      ];
      client.descriptors.page.listBudgets.createStream =
        stubPageStreamingCall(expectedResponse);
      const stream = client.listBudgetsStream(request);
      const promise = new Promise((resolve, reject) => {
        const responses: protos.google.cloud.billing.budgets.v1.Budget[] = [];
        stream.on(
          'data',
          (response: protos.google.cloud.billing.budgets.v1.Budget) => {
            responses.push(response);
          }
        );
        stream.on('end', () => {
          resolve(responses);
        });
        stream.on('error', (err: Error) => {
          reject(err);
        });
      });
      const responses = await promise;
      assert.deepStrictEqual(responses, expectedResponse);
      assert(
        (client.descriptors.page.listBudgets.createStream as SinonStub)
          .getCall(0)
          .calledWith(client.innerApiCalls.listBudgets, request)
      );
      assert.strictEqual(
        (client.descriptors.page.listBudgets.createStream as SinonStub).getCall(
          0
        ).args[2].otherArgs.headers['x-goog-request-params'],
        expectedHeaderRequestParams
      );
    });

    it('invokes listBudgetsStream with error', async () => {
      const client = new budgetserviceModule.v1.BudgetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.billing.budgets.v1.ListBudgetsRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedError = new Error('expected');
      client.descriptors.page.listBudgets.createStream = stubPageStreamingCall(
        undefined,
        expectedError
      );
      const stream = client.listBudgetsStream(request);
      const promise = new Promise((resolve, reject) => {
        const responses: protos.google.cloud.billing.budgets.v1.Budget[] = [];
        stream.on(
          'data',
          (response: protos.google.cloud.billing.budgets.v1.Budget) => {
            responses.push(response);
          }
        );
        stream.on('end', () => {
          resolve(responses);
        });
        stream.on('error', (err: Error) => {
          reject(err);
        });
      });
      await assert.rejects(promise, expectedError);
      assert(
        (client.descriptors.page.listBudgets.createStream as SinonStub)
          .getCall(0)
          .calledWith(client.innerApiCalls.listBudgets, request)
      );
      assert.strictEqual(
        (client.descriptors.page.listBudgets.createStream as SinonStub).getCall(
          0
        ).args[2].otherArgs.headers['x-goog-request-params'],
        expectedHeaderRequestParams
      );
    });

    it('uses async iteration with listBudgets without error', async () => {
      const client = new budgetserviceModule.v1.BudgetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.billing.budgets.v1.ListBudgetsRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedResponse = [
        generateSampleMessage(
          new protos.google.cloud.billing.budgets.v1.Budget()
        ),
        generateSampleMessage(
          new protos.google.cloud.billing.budgets.v1.Budget()
        ),
        generateSampleMessage(
          new protos.google.cloud.billing.budgets.v1.Budget()
        ),
      ];
      client.descriptors.page.listBudgets.asyncIterate =
        stubAsyncIterationCall(expectedResponse);
      const responses: protos.google.cloud.billing.budgets.v1.IBudget[] = [];
      const iterable = client.listBudgetsAsync(request);
      for await (const resource of iterable) {
        responses.push(resource!);
      }
      assert.deepStrictEqual(responses, expectedResponse);
      assert.deepStrictEqual(
        (client.descriptors.page.listBudgets.asyncIterate as SinonStub).getCall(
          0
        ).args[1],
        request
      );
      assert.strictEqual(
        (client.descriptors.page.listBudgets.asyncIterate as SinonStub).getCall(
          0
        ).args[2].otherArgs.headers['x-goog-request-params'],
        expectedHeaderRequestParams
      );
    });

    it('uses async iteration with listBudgets with error', async () => {
      const client = new budgetserviceModule.v1.BudgetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.billing.budgets.v1.ListBudgetsRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedError = new Error('expected');
      client.descriptors.page.listBudgets.asyncIterate = stubAsyncIterationCall(
        undefined,
        expectedError
      );
      const iterable = client.listBudgetsAsync(request);
      await assert.rejects(async () => {
        const responses: protos.google.cloud.billing.budgets.v1.IBudget[] = [];
        for await (const resource of iterable) {
          responses.push(resource!);
        }
      });
      assert.deepStrictEqual(
        (client.descriptors.page.listBudgets.asyncIterate as SinonStub).getCall(
          0
        ).args[1],
        request
      );
      assert.strictEqual(
        (client.descriptors.page.listBudgets.asyncIterate as SinonStub).getCall(
          0
        ).args[2].otherArgs.headers['x-goog-request-params'],
        expectedHeaderRequestParams
      );
    });
  });

  describe('Path templates', () => {
    describe('billingAccount', () => {
      const fakePath = '/rendered/path/billingAccount';
      const expectedParameters = {
        billing_account: 'billingAccountValue',
      };
      const client = new budgetserviceModule.v1.BudgetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      client.pathTemplates.billingAccountPathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.billingAccountPathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('billingAccountPath', () => {
        const result = client.billingAccountPath('billingAccountValue');
        assert.strictEqual(result, fakePath);
        assert(
          (client.pathTemplates.billingAccountPathTemplate.render as SinonStub)
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchBillingAccountFromBillingAccountName', () => {
        const result =
          client.matchBillingAccountFromBillingAccountName(fakePath);
        assert.strictEqual(result, 'billingAccountValue');
        assert(
          (client.pathTemplates.billingAccountPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });

    describe('budget', () => {
      const fakePath = '/rendered/path/budget';
      const expectedParameters = {
        billing_account: 'billingAccountValue',
        budget: 'budgetValue',
      };
      const client = new budgetserviceModule.v1.BudgetServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      client.pathTemplates.budgetPathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.budgetPathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('budgetPath', () => {
        const result = client.budgetPath('billingAccountValue', 'budgetValue');
        assert.strictEqual(result, fakePath);
        assert(
          (client.pathTemplates.budgetPathTemplate.render as SinonStub)
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchBillingAccountFromBudgetName', () => {
        const result = client.matchBillingAccountFromBudgetName(fakePath);
        assert.strictEqual(result, 'billingAccountValue');
        assert(
          (client.pathTemplates.budgetPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchBudgetFromBudgetName', () => {
        const result = client.matchBudgetFromBudgetName(fakePath);
        assert.strictEqual(result, 'budgetValue');
        assert(
          (client.pathTemplates.budgetPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });
  });
});
