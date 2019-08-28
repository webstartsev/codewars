Test.assertEquals(duplicateEncode('din'), '(((');
Test.assertEquals(duplicateEncode('recede'), '()()()');
Test.assertEquals(duplicateEncode('Success'), ')())())', 'should ignore case');
Test.assertEquals(duplicateEncode('(( @'), '))((');
