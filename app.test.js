describe('dubArrow',function(){
    it('should take an array of numbers and double each element',function(){
        let numArr=[1,2,3];
        expect(dubArrow(numArr)).toEqual([2,4,6]);
    })
})

describe('safeArrow',function(){
    it('should take an array of numbers, square each element, and return the even numbers',function(){
        let numArr=[1,2,3,4,5];
        expect(safeArrow(numArr)).toEqual([4,16]);
    })
})