import * as request from "supertest"

import ServerApp from "../application";

const app = ServerApp.getServer();

describe("Server tests", ()=> {

    
    test("should assert", (done) => {
        
        request(app).get("/").expect(200);
        done();

    })
})
