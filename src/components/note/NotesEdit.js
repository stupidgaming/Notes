import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useStateContext } from "../../context/StateContext";
import { database } from "../../firebase";
import "./note-sass/NotesInput.scss";
import NoteInputFontSelect from "./notes input selector/NoteInputFontSelect";
import NoteInputFontSizeSelect from "./notes input selector/NoteInputFontSizeSelect";
import NotesInputSelect from "./notes input selector/NotesInputColorSelect";
import { v4 as uuidV4 } from "uuid";
import LoadingSvg from "./img/LoadingSvg";
import BackSvg from "./img/BackSvg";

export default function NotesEdit() {
  const {
    setAddNote,
    text,
    setText,
    noteBackgroundColor,
    setNoteBackgroundColor,
    textColor,
    setTextColor,
    font,
    setFont,
    fontSize,
    setFontSize,
    title,
    setTitle,
    currentNote,
    setPreview,
    setEdit,
    themes,
    defaultTheme,
  } = useStateContext();

  const [close, setClose] = useState(false);
  const [noteHelp, setNoteHelp] = useState(false);
  const [saving, setSaving] = useState(false);
  const [onlineStatus, setOnlineStatus] = useState(true);
  const { currentUser } = useAuth();
  const id = uuidV4();
  useEffect(() => {
    document.querySelector("body").style.background = defaultTheme[0];
  }, []);
  useEffect(() => {
    // if (currentUser){
    //   database.users
    //   .doc(currentUser.uid)
    //   .get()
    //   .then((doc) => {
    //     if (doc.exists) {
    //       let tempNote = doc.data().note;
    //       tempNote.map((tNote) => {
    //         if (tNote.noteId === currentNote.noteId) {
    //           console.log(tNote.backgroundColor)
    //           setNoteBackgroundColor(tNote.backgroundColor)
    //           setTextColor(tNote.textColor)
    //           console.log('note')
    //           return;
    //         }
    //        }
    //       );
    //     }
    //    }
    //   )
    // }
    setTitle(currentNote.title);
    setText(currentNote.note);
    setTextColor(currentNote.textColor);
    setNoteBackgroundColor(currentNote.backgroundColor);
    setFont(currentNote.font);
    setFontSize(currentNote.fontSize);
  },[]);

  const handleRipples = (e) => {
    setNoteHelp(!noteHelp);
    let ripplesClassName = e.target.className;
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;
    let ripples = document.createElement("span");
    ripples.style.left = x + "px";
    ripples.style.top = y + "px";
    document.querySelector(`.${ripplesClassName}`).appendChild(ripples);
    setTimeout(() => {
      ripples.remove();
    }, 500);
  };
  const handleUpdate = () => {
    let months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    let date = new Date();
    let fullDate = `${date.getDate()} ${
      months[date.getMonth()]
    } ${date.getFullYear()}`;
    database.users
      .doc(currentUser.uid)
      .get()
      .then((doc) => {
        if (doc.exists) {
          console.log("geting data");
          let tempNote = doc.data().note;
          let b = -1;
          tempNote.map((tNote) => {
            b = b + 1;
            if (tNote.noteId === currentNote.noteId) {
              tempNote.splice(b, 1);
              return;
            }
          });
          console.log("setData");
          tempNote = [
            ...tempNote,
            {
              title: title,
              note: text,
              backgroundColor: noteBackgroundColor,
              textColor: textColor,
              font: font,
              fontSize: fontSize,
              noteId: id,
              date: fullDate,
            },
          ];
          console.log("updated data");
          database.users
            .doc(currentUser.uid)
            .update({
              note: tempNote,
            })
            .then((e) => {
              console.log("updated note at server");
              setText("");
              setTitle("");
              setFont("Sans-serif");
              setFontSize("25");
              setNoteBackgroundColor(defaultTheme[1]);
              setTextColor(defaultTheme[2]);
              setSaving(false);
              setAddNote(false);
              setPreview(false);
              setEdit(false);
            });
          console.log("updated server data");
        }
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (navigator.onLine) {
      console.log("online");
      setSaving(true);
      handleUpdate();
    }
    if (navigator.onLine === false) {
      setOnlineStatus(false);
      console.log("offline");
    }
  };
  const handleClose = async () => {
    await document.querySelector(".formContainer").classList.add("close");
    setTimeout(() => {
      setText("");
      setTitle("");
      setFont("Sans-serif");
      setFontSize("25");
      setNoteBackgroundColor(defaultTheme[1]);
      setTextColor(defaultTheme[2]);
      setPreview(false);
      setClose(true);
      setAddNote(false);
      setClose(false);
      setEdit(false);
    }, 300);
  };
  useEffect(()=>{
    document.querySelector('body').style.background = defaultTheme[0];
  },[themes])
  return (
    <div className="formContainer" style={{ background: defaultTheme[0] }}>
      {saving && (
        <div className="loading">
          <LoadingSvg />
        </div>
      )}
      {!onlineStatus && (
        <div className="offline">
          <div>
            <p>Check your internet connection and try again.</p>
            <button onClick={() => setOnlineStatus(true)}>Close</button>
          </div>
        </div>
      )}
      <div
        className="navInput"
        style={{
          background: defaultTheme[1],
          color: defaultTheme[2],
          boxShadow: `6px 6px 5px ${defaultTheme[4]}`,
        }}
      >
        <button
          className="backInput"
          style={{ background: defaultTheme[3] }}
          onClick={handleClose}
        >
          <BackSvg />
        </button>
        <h1>Edit Note</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="inputCon">
          <input
            className="titleInput"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            placeholder="Title..."
            maxLength="15"
            style={{
              background: `${noteBackgroundColor}`,
              color: `${textColor}`,
              transition: "all 0.35s",
              fontFamily: `${font}`,
              boxShadow: `6px 6px 5px ${defaultTheme[4]}`,
            }}
          />
          <div className="chaLimit">{title.length}/15</div>
        </div>
        <div className="textareaCon">
          <textarea
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
            placeholder="Note..."
            maxLength="1000"
            style={{
              background: `${noteBackgroundColor}`,
              color: `${textColor}`,
              transition: "all 0.35s",
              fontFamily: `${font}`,
              fontSize: `${fontSize}px`,
              boxShadow: `6px 6px 5px ${defaultTheme[4]}`,
            }}
          />
          <div className="chaLimit">{text.length}/1000</div>
        </div>
        <div className="selectContainer">
          <NotesInputSelect
            title="Background"
            paddingT="0px"
            paddingB="0px"
            align_1="0"
            color={noteBackgroundColor}
            setColor={setNoteBackgroundColor}
            colors={["#ffffff", "#f2cdaf", "#f9e2cf", "#fcd9dd", "#b6dee7"]}
          />
          <NotesInputSelect
            title="Text Color"
            paddingT="10px"
            paddingB="0px"
            align_2="0"
            color={textColor}
            setColor={setTextColor}
            colors={["#000000", "#ffffff", "#ff0000", "#9500ff", "#ff00ff"]}
          />
          <NoteInputFontSelect />
          <NoteInputFontSizeSelect />
        </div>
        <button
          type="submit"
          className="save"
          style={{
            background: defaultTheme[5],
            boxShadow: `6px 6px 5px ${defaultTheme[4]}`,
          }}
          onClick={handleRipples}
        >
          Save
        </button>
      </form>
    </div>
  );
}
