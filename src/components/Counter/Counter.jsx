import React from 'react'

export const Counter = ({ tasks}) => {
    const completedTasks = tasks.reduce(
      (acc, task) => (task.completed ? acc + 1 : acc),
      0
    );

  return (
    <div>
          <p>Total:{tasks.length }</p>
          <p>Completed:{completedTasks}</p>
    </div>
  )
}


