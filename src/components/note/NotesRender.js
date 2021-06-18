import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useStateContext } from "../../context/StateContext";
import { database } from "../../firebase";
import AddNotesBtn from "./AddNotesBtn";
import NotesInput from "./NotesInput";
import "./note-sass/NotesRender.scss";
import PreviewNote from "./PreviewNote";
import NotesEdit from "./NotesEdit";
import Delete from "./img/Delete";
import Edit from "./img/Edit";
import SideNav from "./SideNav";
import BackSvg from "./img/BackSvg";
import LoadingSvg from "./img/LoadingSvg";
import Themes from "../nav/Themes";

export default function NotesRender() {
  const [firstLoad, setFirstLoad] = useState(true);
  const [noteData, setNoteData] = useState();
  const [preNote, setPreNote] = useState({});
  const [deleting, setDeleting] = useState(false);
  const [del, setDel] = useState(false);
  const { currentUser } = useAuth();
  const {
    addNote,
    setNotes,
    setNoteBackgroundColor,
    setTextColor,
    sort,
    setSort,
    setCurrentNote,
    preview,
    setPreview,
    edit,
    setEdit,
    sideNavbar,
    setSideNavbar,
    themes,
    setThemes,
    defaultTheme,
    setDefaultTheme
  } = useStateContext();
  useEffect(() => {
    setNoteBackgroundColor(defaultTheme[1]);
    setTextColor(defaultTheme[2]);
  }, []);
  function reverseArr(input) {
    let ret = [];
    for (let i = input.length - 1; i >= 0; i--) {
      ret.push(input[i]);
    }
    return ret;
  }
  if (currentUser) {
    const com = database.users
      .doc(currentUser.uid)
      .get()
      .then((doc) => {
        if (doc.exists) {
          return;
        } else {
          database.users.doc(currentUser.uid).set({
            note: [],
            uid: currentUser.uid,
            theme: ['#ececec','#fff','#000','#dfdfdf','#bbb','#c990ff','#00b300']
          });
        }
      });
  }
  useEffect(() => {
    database.users
      .doc(currentUser.uid)
      .get()
      .then((doc) => {
        if (doc.data().theme){
          setDefaultTheme(doc.data().theme)
          console.log('yes')
        }else{
          console.log('no')
        }
        console.log(doc.data().theme)
        let tempData = doc.data().note;
        tempData = reverseArr(tempData);
        setNoteData(tempData);
        setNotes(tempData);
        setFirstLoad(false);
      });
  }, [addNote, edit, deleting]);

  const handleRipples = (e) => {
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

  const handleSort = () => {
    if (sort === "title") {
      setSort("grid");
    } else if (sort === "grid") {
      setSort("title");
    } else {
    }
  };

  const handleSee = (e) => {
    let show = e.target.id;
    const hShow = document.getElementById(`${show}`).dataset;
    setPreNote({
      note: hShow.note,
      title: hShow.title,
      backgroundColor: hShow.backgroundcolor,
      textColor: hShow.textcolor,
      font: hShow.font,
      fontSize: hShow.fontsize,
      date: hShow.date,
      noteId: hShow.noteid,
    });
    setCurrentNote({
      note: hShow.note,
      title: hShow.title,
      backgroundColor: hShow.backgroundcolor,
      textColor: hShow.textcolor,
      font: hShow.font,
      fontSize: hShow.fontsize,
      date: hShow.date,
      noteId: hShow.noteid,
    });
    setPreview(true);
  };
  const handleBack = () => {
    document.querySelector(".preCon").classList.add("back1");
    setTimeout(() => {
      setPreview(false);
    }, 400);
  };
  const handleDelete = (e) => {
    handleRipples(e);
    document.querySelector(".delCon").classList.remove("openAnime");
    document.querySelector(".delCon").classList.add("cancelAnime");
    setTimeout(() => {
      setDel(false);
    }, 300);
    setDeleting(true);
    let delId = e.target.id;
    console.log(e.target.id);
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
            if (tNote.noteId === delId) {
              tempNote.splice(b, 1);
              return;
            }
          });
          database.users.doc(currentUser.uid).update({
            note: tempNote,
          });
          console.log("deleted");
          setDeleting(false);
          setPreview(false);
        }
      });
  };
  const handleOpen = async () => {
    await setDel(true);
    document.querySelector(".delCon").classList.add("openAnime");
  };
  const handleCancel = async () => {
    await document.querySelector(".delCon").classList.remove("openAnime");
    document.querySelector(".delCon").classList.add("cancelAnime");
    setTimeout(() => {
      setDel(false);
    }, 300);
  };
  let burger = false;
  const handleBurger = async () => {
    burger = !burger;
    setSideNavbar(!sideNavbar);
  };
  useEffect(() => {
    handleBurgerSub();
  }, [sideNavbar]);
  const handleBurgerSub = () => {
    const el = document.querySelector(".burger").children;
    if (sideNavbar) {
      el.item(0).classList.remove("closeBurger1");
      el.item(1).classList.remove("closeBurger2");
      el.item(2).classList.remove("closeBurger3");
      void el.item(0).offsetWidth;
      void el.item(1).offsetWidth;
      void el.item(2).offsetWidth;
      el.item(0).classList.add("openBurger1");
      el.item(1).classList.add("openBurger2");
      el.item(2).classList.add("openBurger3");
    } else if (!sideNavbar) {
      el.item(0).classList.remove("openBurger1");
      el.item(1).classList.remove("openBurger2");
      el.item(2).classList.remove("openBurger3");
      void el.item(0).offsetWidth;
      void el.item(1).offsetWidth;
      void el.item(2).offsetWidth;
      el.item(0).classList.add("closeBurger1");
      el.item(1).classList.add("closeBurger2");
      el.item(2).classList.add("closeBurger3");
    }
  };
  useEffect(() => {
    document.querySelector("body").style.background = defaultTheme[0];
  }, [themes]);

  return (
    <>
      {sideNavbar && <SideNav />}
      {themes && <Themes />}
      {preview && !edit && (
        <div className="preCon" style={{ background: defaultTheme[0] }}>
          <div
            className="navPreview"
            style={{
              background: defaultTheme[1],
              boxShadow: `6px 6px 5px ${defaultTheme[4]}`,
              color:defaultTheme[2]
            }}
          >
            <button
              className="back"
              style={{ background: defaultTheme[3] }}
              onClick={() => handleBack()}
            >
              <BackSvg />
            </button>
            <h1>Note</h1>
            <button
              className="edit"
              style={{ background: defaultTheme[3] }}
              onClick={() => setEdit(true)}
            >
              <Edit />
            </button>
            <button
              className="delete"
              style={{ background: defaultTheme[3] }}
              onClick={handleOpen}
            >
              <Delete />
            </button>
          </div>
          {del && (
            <div className="delCon">
              <div
                className="del"
                style={{ background: defaultTheme[1], color: defaultTheme[2] }}
              >
                <h1>Are you sure to delete?</h1>
                <div>
                  <button
                    className="cancelDel"
                    onClick={handleCancel}
                    style={{ background: defaultTheme[6] }}
                  >
                    Cancel
                  </button>
                  <button
                    className="deleteDel"
                    id={`${preNote.noteId}`}
                    onClick={handleDelete}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          )}
          {deleting && (
            <div className="loading">
              <LoadingSvg />
            </div>
          )}
          <PreviewNote note={preNote} />
        </div>
      )}
      {edit && (
        <div className="preCon">
          <NotesEdit />
        </div>
      )}
      {addNote && !preview && <NotesInput />}
      {!addNote && !preview && (
        <div
          className="notesContainer"
          style={{ background: defaultTheme[0], color: defaultTheme[2] }}
        >
          <h1
            className="logo"
            style={{
              background: defaultTheme[1],
              boxShadow: `6px 6px 5px ${defaultTheme[4]}`,
            }}
          >
            Notes
            <button onClick={handleBurger}>
              <div className="burger" style={{ background: defaultTheme[3] }}>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </button>
          </h1>
          {firstLoad && (
            <div className="loading">
              <LoadingSvg />
            </div>
          )}
          <div className="noteCon">
            {noteData &&
              noteData.map((note) => (
                <div
                  className="notes"
                  style={{
                    background: `${note.backgroundColor}`,
                    color: `${note.textColor}`,
                    fontFamily: `${note.font}`,
                    fontSize: `${note.fontSize}px`,
                    boxShadow: `6px 6px 5px ${defaultTheme[4]}`,
                  }}
                  key={note.noteId}
                  onClick={handleSee}
                  id={`a${note.noteId}`}
                  data-note={note.note}
                  data-title={note.title}
                  data-date={note.date}
                  data-backgroundcolor={note.backgroundColor}
                  data-textcolor={note.textColor}
                  data-font={note.font}
                  data-fontsize={note.fontSize}
                  data-noteid={note.noteId}
                >
                  <h1>{note.title}</h1>
                  <div
                    style={{ padding: `${sort === "title" ? `0px` : `10px`}` }}
                  >
                    {sort === "grid" &&
                      (note.note.length > 460 && note.fontSize === "15" ? (
                        <p>
                          {note.note.slice(0, 461)}
                          <a style={{ fontSize: `${note.fontSize}px` }}>...</a>
                        </p>
                      ) : note.note.length > 250 && note.fontSize === "25" ? (
                        <p>
                          {note.note.slice(0, 240)}
                          <a style={{ fontSize: `${note.fontSize}px` }}>...</a>
                        </p>
                      ) : note.note.length > 115 && note.fontSize === "35" ? (
                        <p>
                          {note.note.slice(0, 120)}
                          <a style={{ fontSize: `${note.fontSize}px` }}>...</a>
                        </p>
                      ) : note.note.length > 44 && note.fontSize === "45" ? (
                        <p>
                          {note.note.slice(0, 45)}
                          <a style={{ fontSize: `${note.fontSize}px` }}>...</a>
                        </p>
                      ) : (
                        note.note
                      ))}
                  </div>
                  <p className="date">{note.date}</p>
                </div>
              ))}
          </div>
          <AddNotesBtn />
        </div>
      )}
    </>
  );
}
