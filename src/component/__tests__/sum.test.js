import { sum } from "../sum"


test("sum function should calculate the sum of two",()=>{
    const result=sum(3,4)

    //assertion
    expect(result).toBe(7)
})