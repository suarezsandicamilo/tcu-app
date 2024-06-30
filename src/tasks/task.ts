//

import * as z from 'zod';

export const TaskSchema = z.object({
  id: z.number(),
  type: z.string(),
});

export type Task = z.infer<typeof TaskSchema>;
