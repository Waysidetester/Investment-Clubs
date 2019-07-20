using Investment_Clubs;
using Xunit;

namespace Invesetment_Clubs.Test
{
    public class TestingTestLink
    {
        [Theory]
        [InlineData(1, 1, 2)]
        [InlineData(1, 2, 3)]
        [InlineData(2, 1, 3)]
        [InlineData(2, 2, 4)]
        public void Check_Single_Addition_Works(int firstNumber, int secondNumber, int expectedResult)
        {
            TestLink testLinkEngine = new TestLink();

            var result = testLinkEngine.SimpleAddition(firstNumber, secondNumber);

            Assert.Equal(result, expectedResult);
        }
    }
}