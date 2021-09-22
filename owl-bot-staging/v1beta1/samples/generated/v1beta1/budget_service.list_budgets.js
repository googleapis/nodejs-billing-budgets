// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


'use strict';

function main(parent) {
  // [START budgets_list_budgets_sample]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Name of billing account to list budgets under. Values
   *  are of the form `billingAccounts/{billingAccountId}`.
   */
  // const parent = 'abc123'
  /**
   *  Optional. The maximum number of budgets to return per page.
   *  The default and maximum value are 100.
   */
  // const pageSize = 1234
  /**
   *  Optional. The value returned by the last `ListBudgetsResponse` which
   *  indicates that this is a continuation of a prior `ListBudgets` call,
   *  and that the system should return the next page of data.
   */
  // const pageToken = 'abc123'

  // Imports the Budgets library
  const {BudgetServiceClient} = require('@google-cloud/billing-budgets').v1beta1;

  // Instantiates a client
  const budgetsClient = new BudgetServiceClient();

  async function listBudgets() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await budgetsClient.listBudgetsAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  listBudgets();
  // [END budgets_list_budgets_sample]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
