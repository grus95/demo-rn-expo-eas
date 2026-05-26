import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Text } from '@/components/ui/text';

export function DemoFormCard() {
  const [value, setValue] = useState('');

  const handleSubmit = () => {
    setValue('');
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Demo UI</CardTitle>
      </CardHeader>

      <CardContent className="gap-2">
        <Input
          placeholder="Type something..."
          value={value}
          onChangeText={setValue}
        />

        <Button onPress={handleSubmit}>
          <Text>Submit</Text>
        </Button>
      </CardContent>
    </Card>
  );
}