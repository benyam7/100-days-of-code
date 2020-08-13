package com.seifu.chane.benyam.hundreddaysOfCode

import android.os.Bundle
import android.util.Log
import androidx.appcompat.app.AppCompatActivity
import com.google.firebase.database.*

class MainActivity : AppCompatActivity() {

    private val TAG = "Main Activity"
    lateinit var database: FirebaseDatabase
    lateinit var reference: DatabaseReference

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        database = FirebaseDatabase.getInstance()

        // write to realtime
        reference = database.getReference("Donor/Name")

//        writeToDatabase()
//        readFromRealtime()
        parsingDatasnapshotObject()
        updatingData()
        writingMapsToRealtime()
    }

    private fun readFromRealtime() {
        reference
            .addValueEventListener(object : ValueEventListener {
                override fun onCancelled(error: DatabaseError) {
                    // Failed to read value
                    Log.w(TAG, "Failed to read value: ${error.toException()}")
                }

                override fun onDataChange(snapshot: DataSnapshot) {
                    // This method is called once with the initial value and again
                    // whenever data at this location is updated.
                    /* val value = snapshot.getValue(String::class.java)
                     Log.d(TAG, "Value is: $value")*/
                }

            })
    }


    //    writing with objects
    private fun writeToDatabase() {
/*        reference.setValue("Benyam Seifu")
            .addOnFailureListener {
                Log.d(TAG, "$it")
            }*/

        // setting firebase unique key for hashmap list
        val userId = reference.push().key.toString()
        // create user object
        val user = User(
            "Benyam",
            "binychanyalew@gmail.com",
            "+251912176198"
        )
        reference
            .child(userId)
            .setValue(user)

        //    reading the objects from realtime
        reference
            .child(userId)
            .addValueEventListener(object : ValueEventListener {
                override fun onCancelled(error: DatabaseError) {
                    Log.d(TAG, "${error.toException()}")
                }

                override fun onDataChange(snapshot: DataSnapshot) {
                    val user = snapshot.getValue(User::class.java)
                    Log.d(TAG, "User: $user")
                }
            })


    }

    // using addValueEventListener we can listen to many nodes as well as single node
    private fun listeningToSingleValue() {

        val changeListener = object : ValueEventListener {
            override fun onCancelled(error: DatabaseError) {
                TODO("Not yet implemented")
            }

            override fun onDataChange(snapshot: DataSnapshot) {
                TODO("Not yet implemented")
            }

        }
        reference.addValueEventListener(changeListener)


    }

    override fun onStop() {
        super.onStop()
//        reference.removeEventListener(changeListener)
    }


    //    parsing the datasnapshot object
    private fun parsingDatasnapshotObject() {
        // btw, addValueEventListener atleast get called once
        // first to read data, and other times when the data changes
        reference
            .addValueEventListener(object : ValueEventListener {
                override fun onCancelled(error: DatabaseError) {
                    Log.d(TAG, "${error.toException()}")
                }

                override fun onDataChange(snapshot: DataSnapshot) {
                    /*In a simple way, DataSnapshot can be accessed through the getValue method. We can
                    use the child() method to reach to a specific path of a snapshot. Consider the following
                    example code snippet that fetches the title:*/
                    val email = snapshot.child("-MEdL3pasa6eyK6iGODJ").child("email")
                        .getValue(String::class.java)

                    Log.d(TAG, "User: $email")

                    // accessing all children
                    val users = snapshot.children
                    for (snap in users) {
                        Log.d(TAG, "User: $snap")
                    }
                }
            })

    }


    private fun updatingData() {
        val newEmail = "biny@yahoo.com"
        reference.child("-MEdL3pasa6eyK6iGODJ")
            .child("email")
            .setValue(newEmail)
        // we can also update children
        reference
            .child("-MEdL3pasa6eyK6iGODJ")
            .updateChildren(
                mapOf(
                    "name" to "New name",
                    "email" to "new email",
                    "phone" to "new phone"
                )
            )
    }

    private fun writingMapsToRealtime() {
//            we can write map using updateChildren()
        val userId = reference.push().key.toString()
        val user = mapOf(
            "name" to "Biny",
            "email" to "biny@email.com",
            "phone" to "phone@biny"
        )

        reference.child(userId)
            .updateChildren(user)
    }

//    realtime database and lists

}


