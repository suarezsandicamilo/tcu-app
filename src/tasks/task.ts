//

import * as z from 'zod';

export const TaskSchema = z.object({
  type: z.string(),
});

export type Task = z.infer<typeof TaskSchema>;
