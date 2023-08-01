import { FC, useMemo, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import usePosts from "../../hooks/usePosts";
import { TextField } from "@mui/material";

interface IFeedProps {}

const Feed: FC<IFeedProps> = () => {
  const { posts, isLoading, isError } = usePosts();

  const [columnDefs] = useState([
    { field: "id", cellEditor: TextField, cellEditorPopup: true },
    { field: "title", cellEditor: TextField, cellEditorPopup: true },
    { field: "description" },
    { field: "user.username", headerName: "Author" },
    { field: "tagIds", headerName: "Tags" },
    { field: "postedDate", headerName: "Post Date" },
  ]);

  const defaultColDef = useMemo(
    () => ({
      resizable: true,
      sortable: true,
    }),
    [],
  );

  return (
    <>
      <div
        className="ag-theme-alpine"
        style={{ height: "800px", width: "100%" }}
      >
        <AgGridReact
          animateRows
          rowData={posts}
          defaultColDef={defaultColDef}
          columnDefs={columnDefs}
          rowSelection="multiple"
          enableRangeSelection
        />
      </div>
    </>
  );
};

export default Feed;
