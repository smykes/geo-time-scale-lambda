import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
import { getTime } from "../epochController.mts";

const handler: Handler = async (event: HandlerEvent) => {
  const age: string | undefined = event.queryStringParameters?.age;
  return {
    statusCode: 200,
    body: getTime(age),
  };
};

export { handler };
