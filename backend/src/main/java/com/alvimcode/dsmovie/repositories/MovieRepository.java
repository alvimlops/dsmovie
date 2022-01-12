package com.alvimcode.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.alvimcode.dsmovie.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long> {

}
