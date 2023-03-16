import React from "react";
import './ProfilePage.css'

export default function Profile() {
    return (
        <>
            <div className="profile">
                <div className="mainCard left-card">
                    <div className="mainCard__header">
                        <span>user</span>
                    </div>
                    <div className="profile_image">
                        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                            alt="profile_image" />
                    </div>
                    <div className="personal_details">

                        <div>
                            <label>First Name</label>
                            <input className="input-default" type="text" placeholder="First Name" />
                            <input className="input-default" type="text" placeholder="First Name" />
                        </div>
                        <div>
                            <label>Last Name</label>
                            <input className="input-default" type="text" placeholder="Last Name" />
                            <input className="input-default" type="text" placeholder="Last Name" />
                        </div>
                        <div>
                            <label>Email</label>
                            <input className="input-default" type="text" placeholder="Email" />
                            <input className="input-default" type="text" placeholder="Email" />
                        </div>
                        <div>
                            <label>Residence place</label>
                            <input className="input-default" type="text" placeholder="Residence" />
                            <input className="input-default" type="text" placeholder="Residence" />
                        </div>
                        <div className="buttons" v-if="isOwnProfile()">
                        </div>

                    </div >
                </div>
            </div>

        </>
        //       <div className="right-card">
        //         <div className="mainCard">
        //           <div className="mainCard__header">
        //             <div className="header-action">
        //               <span>Educations</span>
        //               <div className="addNew btn" v-if="isOwnProfile()" @click="showModal = true" style="cursor: pointer">Add</div>
        //             </div>
        //           </div>
        //           <div className="educations">
        //             <div v-for="education in educations" :key="education">
        //               <div className="education" style="cursor: no-drop" title="Remove education">
        //                 <p>{{ education.name }} -</p>
        //                 <p>{{ education.location }}</p>
        //               </div>
        //             </div>
        //           </div>
        //         </div >
        //         <div className="mainCard">
        //           <div className="mainCard__header">
        //             <div className="header-action">
        //               <span>Specializations</span>
        //               <div className="addNew btn" v-if="isOwnProfile()" @click="showModalSpecialization = true"
        //                 style="cursor: pointer">
        //                 Add
        //               </div>
        //             </div>
        //           </div>
        //           <div className="educations">
        //             <div v-for="specialization in specializations" :key="specialization">
        //               <div className="education" style="cursor: no-drop" title="Remove specialization">
        //                 {/* <p>{{ specialization.name }}</p> */}

        //               </div>
        //             </div>

        //           </div >
        //         </div >
        //       </div >
        //     </div >
        //   </div >
        //   </>

        /* <Teleport to="body">
                <modal :show="showModal" @close="showModal = false" @save="saveEducation">
                <template #header>
                    <h3>Add education to your profile</h3>
                </template>
                <template #body>
                    <div className="modal-body">
                        <label>Education name</label>
                        <!-- select with options of allEducations, where the chosen education is stored -->
                        <select v-model="chosenEducation">
                            <option v-for="education in allEducations" :key="education.id" :value="education">
                            {{ education.name }} || {{ education.school }}
                        </option>
                    </select>
                </div>
            </template>
        </modal > */
        /* </Teleport >
            <Teleport to="body">
                <modal :show="showModalSpecialization" @close="showModalSpecialization = false" @save="saveSpecialization">
                <template #header>
                    <h3>Add education to your profile</h3>
                </template>
                <template #body>
                    <div className="modal-body">
                        <label>Specialization name</label>
                        <select v-model="chosenSpecialization">
                            <option v-for="specialization in allSpecializations" :key="specialization.id" :value="specialization">
                            {{ specialization.name }}
                        </option>
                    </select>
                </div>
            </template>
    //     </modal >
    //   </Teleport > */
        //     {/* </template >
        //         </div >
        //     ) */}
    )
}
