/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type GetDataTimelineDataQueryVariables = {||};
export type GetDataTimelineDataQueryResponse = {|
  +catIpsum: ?$ReadOnlyArray<?{|
    +id: ?string,
    +start: ?string,
    +stop: ?string,
    +text: ?string,
    +headline: ?string,
    +mediaLink: ?string,
    +mediaCaption: ?string,
  |}>
|};
export type GetDataTimelineDataQuery = {|
  variables: GetDataTimelineDataQueryVariables,
  response: GetDataTimelineDataQueryResponse,
|};
*/


/*
query GetDataTimelineDataQuery {
  catIpsum {
    id
    start
    stop
    text
    headline
    mediaLink
    mediaCaption
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "catIpsum",
    "kind": "LinkedField",
    "name": "catIpsum",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "start",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "stop",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "text",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "headline",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "mediaLink",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "mediaCaption",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "GetDataTimelineDataQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "GetDataTimelineDataQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "f05a887786559e7215f68959aa8548bc",
    "id": null,
    "metadata": {},
    "name": "GetDataTimelineDataQuery",
    "operationKind": "query",
    "text": "query GetDataTimelineDataQuery {\n  catIpsum {\n    id\n    start\n    stop\n    text\n    headline\n    mediaLink\n    mediaCaption\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '57d686441a20fe1253c96a80b1a3ad60';

module.exports = node;
