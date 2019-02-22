package com.stackroute.graph.repository;

import com.stackroute.graph.model.Question;
import com.stackroute.graph.model.Topic;
import com.stackroute.graph.model.User;
import org.springframework.data.neo4j.annotation.Query;
import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.data.repository.query.Param;

public interface TopicRepository extends Neo4jRepository<Topic, Integer> {


    //method to create relationship FOLLOWS between user and topic//
    @Query("match (q:User),(t:Topic) where q.userId={userid} and t.topicId={topicid} create (q)-[r:FOLLOWS]->(t)")
    User userfollowstopicrelationship(@Param("userid") int userId, @Param("topicid") int topicId);


    //method to create relationship BELONGS between question and topic//
    @Query("match (q:Question),(t:Topic) where q.questionId={questionid} and t.topicId={topicid} create (q)-[r:BELONGS]->(t)")
    Question questionbelongstopicrelationship(@Param("questionid") int questionId, @Param("topicid") int topicId);
}





