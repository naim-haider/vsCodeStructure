import React, { useState } from "react";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";

function Folder({ explorer }) {
  const [expand, setExpand] = useState(false);
  if (explorer.IsFolder) {
    return (
      <div className="mainContainer">
        <div className="Container1">
          <span onClick={() => setExpand(!expand)}>
            {explorer.name} <br />
          </span>

          <div
            style={{
              display: expand ? "block" : "none",
              paddingLeft: 5,
            }}
          >
            {explorer.items.map((exp) => {
              return (
                <>
                  <div style={{ display: "flex" }}>
                    {exp.IsFolder ? (
                      <CreateNewFolderIcon
                        style={{
                          fontSize: "20px",
                          color: "#DBB338",
                        }}
                      />
                    ) : (
                      <InsertDriveFileIcon
                        style={{
                          fontSize: "18px",
                          marginTop: "5px",
                          color: "#F7D46A",
                        }}
                      />
                    )}
                    {/* recursion */}
                    <Folder key={exp.name} explorer={exp} />
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <span style={{ paddingLeft: 15 }}>
        {explorer.name} <br />
      </span>
    );
  }
}

export default Folder;
