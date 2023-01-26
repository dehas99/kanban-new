import React from "react";
import "./Board.scss";
import Ticket from "../Ticket/Ticket";
import { useProject } from "../../context/projectContext";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

export default function Board() {
  const { currentProject } = useProject();
  function onDragEnd(result) {
    console.log(result);

    if (!result.destination) return;

    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      const board = [...currentProject.board];
      const sourceIndex = board.findIndex(
        (column) => column.name === source.droppableId
      );
      const destinationIndex = board.findIndex(
        (column) => column.name === destination.droppableId
      );
      const [removedTicket] = board[sourceIndex].tickets.splice(
        source.index,
        1
      );
      board[destinationIndex].tickets.splice(
        destination.index,
        0,
        removedTicket
      );

      console.log(removedTicket);
      console.log(sourceIndex);
      console.log(destinationIndex);
      console.log(board);
    }
  }

  return (
    <div className="board">
      <DragDropContext onDragEnd={onDragEnd}>
        {currentProject.board.map((column, index) => {
          return (
            <div id={index} key={column.name}>
              <Droppable droppableId={column.name}>
                {(provided, snapshot) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    active={snapshot.isDraggingOver.toString()}
                    key={column.name}
                    className="board-column"
                  >
                    <div className="board-title">
                      <div className={"board-title-icon " + column.name}></div>
                      <h4>Done</h4>
                    </div>
                    {column.tickets.map((ticket, index) => {
                      return (
                        <Draggable
                          key={ticket.id}
                          draggableId={ticket.id}
                          index={index}
                        >
                          {(provided, snapshot) => {
                            return (
                              <Ticket
                                provided={provided}
                                snapshot={snapshot}
                                item={ticket}
                              />
                            );
                          }}
                        </Draggable>
                      );
                    })}
                  </div>
                )}
              </Droppable>
            </div>
          );
        })}
      </DragDropContext>
    </div>
  );
}
