import { useMemo, useState } from 'react';
import { Pressable, Text, View } from 'react-native';

type TodoItem = {
  id: string;
  label: string;
};

type TodoListProps = {
  title?: string;
  items: TodoItem[];
};

export function TodoList({ title = 'Cross-platform checklist', items }: TodoListProps) {
  const [completedIds, setCompletedIds] = useState<Record<string, boolean>>({});

  const completedCount = useMemo(
    () => items.filter((item) => completedIds[item.id]).length,
    [items, completedIds],
  );

  const toggleItem = (itemId: string) => {
    setCompletedIds((previous) => ({
      ...previous,
      [itemId]: !previous[itemId],
    }));
  };

  return (
    <View className="w-full rounded-3xl border border-zinc-200 bg-white p-5">
      <Text className="text-lg font-semibold text-zinc-900">{title}</Text>
      <Text className="mt-1 text-sm text-zinc-500">
        {completedCount}/{items.length} completed
      </Text>

      <View className="mt-4 gap-3">
        {items.map((item) => {
          const isDone = Boolean(completedIds[item.id]);

          return (
            <Pressable
              key={item.id}
              className="flex-row items-center gap-3"
              onPress={() => toggleItem(item.id)}
              accessibilityRole="checkbox"
              accessibilityState={{ checked: isDone }}>
              <View
                className={
                  isDone
                    ? 'h-6 w-6 items-center justify-center rounded-md border border-green-600 bg-green-600'
                    : 'h-6 w-6 items-center justify-center rounded-md border border-zinc-400 bg-white'
                }>
                <Text className={isDone ? 'text-sm font-bold text-white' : 'text-sm text-transparent'}>✓</Text>
              </View>

              <Text className={isDone ? 'text-base font-semibold text-green-700' : 'text-base font-medium text-zinc-800'}>
                {item.label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}
