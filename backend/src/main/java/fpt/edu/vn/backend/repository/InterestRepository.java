package fpt.edu.vn.backend.repository;

import fpt.edu.vn.backend.entity.City;
import fpt.edu.vn.backend.entity.Interest;
import fpt.edu.vn.backend.entity.State;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface InterestRepository extends JpaRepository<Interest, Integer> {
    boolean existsByName(String name);
}
