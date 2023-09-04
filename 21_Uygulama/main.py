from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/test/") 
async def test():
    return {'test' : 'cevap'}

@app.get("/data")
async def get_data():
    return {"message : Hello from FastAPI"}

