import React, {useState, useEffect} from "react";
import '../App.css';
import heart from '../assets/heart.png'
import commentlogo from '../assets/comment.png'
import { useDisclosure } from '@chakra-ui/react'

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
import { Button } from "@chakra-ui/react";

const Post = ({item}) => {
    const { isOpen: isLikeOpen , onOpen: onLikeOpen, onClose: onLikeClose } = useDisclosure()
    const { isOpen: isCommentOpen , onOpen: onCommentOpen, onClose: onCommentClose } = useDisclosure()


    return (
        <div className="itemBox">
            <div style={{padding:4}}>
                <img style={{height:50, width:50, borderRadius:"50%", float:"left", marginLeft:"2vh", marginTop:"1.5vh"}} src={item?.profile} alt=""/>
                <h1 style={{marginTop:"1.8vh", fontSize:"3vh"}}>{item?.name}</h1>
            </div>
            <div style={{height:500}}>
                <img style={{maxHeight:500, maxWidth:500, marginTop:"4vh", marginLeft:"auto",marginRight:"auto"}} src={item?.url} alt=""/>
            </div>
            <div className="reaction">
            
            {/* Likes */}
                <img src={heart} alt="" style={{height:24, widonth:24, marginRight:10}} onClick={onLikeOpen}/>
                <Modal isOpen={isLikeOpen} onClose={onLikeClose}>
                <ModalOverlay />
                <ModalContent style={{ background: "rgba(0, 0, 0, 0.8)" }} className="content">
                <ModalHeader className="modal-heading" style={{color:"lightblue"}}>Liked By</ModalHeader>
                <ModalCloseButton color={"white"} />
                <ModalBody color={"white"} style={{ fontSize: "1.5rem" }}>
                {
                    item?.likedby?.map((like) => {
                        {/* console.log(comm) */}
                        return(
                            <div>
                            <h2>{like}</h2>
                            </div>
                        )
                    })
                }
                </ModalBody>

                <ModalFooter>
                    <Button
                    colorScheme="blue"
                    mr={3}
                    onClick={onLikeClose}
                    style={{ background: "navyblue", color: "#6affaf" }}
                    >
                    Close
                    </Button>
                </ModalFooter>
                </ModalContent>
            </Modal>
                <span>{item?.likedby?.length}</span>
            
            {/* Comments */}
                <img src={commentlogo} style={{height:24, width:24, marginRight:10, marginLeft:10}} onClick={onCommentOpen} alt=""/>

                <Modal isOpen={isCommentOpen} onClose={onCommentClose}>
                <ModalOverlay />
                <ModalContent style={{ background: "rgba(0, 0, 0, 0.8)" }} className="content">
                <ModalHeader className="modal-heading" style={{color:"lightblue"}}>Comments</ModalHeader>
                <ModalCloseButton color={"white"} />
                <ModalBody color={"white"} style={{ fontSize: "1.5rem" }}>
                {
                    item?.comment?.map((comm) => {
                        {/* console.log(comm) */}
                        return(
                            <div>
                            <h2>{comm}</h2>
                            </div>
                        )
                    })
                }
                </ModalBody>

                <ModalFooter>
                    <Button
                    colorScheme="blue"
                    mr={3}
                    onClick={onCommentClose}
                    style={{ background: "navyblue", color: "#6affaf" }}
                    >
                    Close
                    </Button>
                </ModalFooter>
                </ModalContent>
            </Modal>

            <span>{item?.comment?.length}</span>
            </div>		
        </div>
  )
}

export default Post