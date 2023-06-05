/*
 * When using the child process module, the new process inherits the process.execArgv property and therefore it runs with TypeScript.
 * Currently, it is not the case with Worker Threads. Trying to run a .ts file in a worker thread results in error
 * As of now, the only way to overcome this issue is to import  .js files.
 * There are a few approaches that we can take with this problem, for example creating a .js file for every worker that we want to use as suggested on GitHub:
 * https://github.com/TypeStrong/ts-node/issues/676#issuecomment-470898116
 *
 * Or it can be one worker.js file that will read workerData.path param passed the Worker constructor as second argument
 * Source: https://wanago.io/2019/05/06/node-js-typescript-12-worker-threads/
 */

const path = require('path')
const { workerData } = require('worker_threads');

require('ts-node').register();
require(path.resolve(__dirname, workerData.path))
